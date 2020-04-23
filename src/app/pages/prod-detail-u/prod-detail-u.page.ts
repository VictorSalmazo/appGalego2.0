import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-detail-u',
  templateUrl: './prod-detail-u.page.html',
  styleUrls: ['./prod-detail-u.page.scss'],
})
export class ProdDetailUPage implements OnInit {

  produto: any = {};

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
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
