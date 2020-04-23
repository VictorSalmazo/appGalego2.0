import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.page.html',
  styleUrls: ['./prod-detail.page.scss'],
})
export class ProdDetailPage implements OnInit {

  produto: any = {};

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public auth: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  async getProduto() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots'
    });
    loading.present();
    this.auth.getProdutoById(this.route.snapshot.paramMap.get('_id'))
      .subscribe(res => {
        this.produto = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        this.presentToastError('Não foi possível carregar dados do produto!');
        loading.dismiss();
      });
  }

  openPage(url: string) {
    this.router.navigate([url]);
  }

  async deleteProduto(id: string) {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots'
    });
    loading.present();

    this.auth.delProduto(id)
      .subscribe(() => {
        loading.dismiss();
        this.router.navigate(['/prod-list']);
      }, err => {
        console.log(err);
        this.presentToastError('Problemas ao deletar dados do produto!');
        loading.dismiss();
      });
  }

  async showConfirm(id) {
    const confirm = await this.alertCtrl.create({
      header: 'Deseja realmente excluir os dados desse produto?',
      message: 'Os dados do produto serão excluídos permanentemente do nosso banco de dados!',
      cssClass: 'alert-ctrl',
      buttons: [{
        text: 'Confirmar',
        handler: () => {
          console.log('Excluindo produto...');
          this.deleteProduto(id);
        }
      },
      {
        text: 'Não',
        handler: () => {
          console.log('Exclusão de produto cancelada');
        }
      }]
    });
    confirm.present();
  }

  async presentToastError(msg: string) {
    const toast = await this.toastCtrl.create({
      animated: true,
      color: 'danger',
      message: msg,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
    this.getProduto();
  }

}
