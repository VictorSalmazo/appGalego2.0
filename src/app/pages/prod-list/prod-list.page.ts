import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.page.html',
  styleUrls: ['./prod-list.page.scss'],
})
export class ProdListPage implements OnInit {

  prod: any;
  allProds: any;
  text: string;

  constructor(
    private auth: AuthService,
    private loadingCtrl: LoadingController,
    public route: ActivatedRoute,
    public toastCtrl: ToastController
  ) {
    this.text = '';
    this.allProds = this.prod;
  }

  ngOnInit() {
    this.listProd();
  }

  async listProd() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots'
    });
    await loading.present();

    this.auth.listProdutos().subscribe(res => {
      this.prod = res.produto;
      this.allProds = res.produto;

      loading.dismiss();
    }, err => {
      console.log(err.error);
      loading.dismiss();
      this.showAlert();
    });
  }

  doRefresh(event) {
    console.log('Atualizando Dados...');
    this.listProd();

    setTimeout(() => {
      console.log('Dados Atualizados!');
      event.target.complete();
    }, 500);
  }

  filter(event) {
    const val = event.target.value;
    if (val && val.trim !== '') {
      this.prod = this.allProds;
      this.prod = this.prod.filter((prod) => {
        return (prod.nome.toUpperCase().indexOf(val.toUpperCase()) > -1);
      });

    } else {
      this.prod = this.allProds;
    }
  }

  async showAlert() {
    const toast = await this.toastCtrl.create({
      animated: true,
      color: 'danger',
      message: 'Problema ao listar produtos ou serviços. Verifique sua conexão com a internet.',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

}
