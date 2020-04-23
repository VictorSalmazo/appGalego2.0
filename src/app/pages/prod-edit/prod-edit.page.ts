import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.page.html',
  styleUrls: ['./prod-edit.page.scss'],
})
export class ProdEditPage implements OnInit {

  prodForm: FormGroup;

  constructor(
    private auth: AuthService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loadProd(this.route.snapshot.paramMap.get('_id'));
    this.prodForm = this.formBuilder.group({
      _id: [null, Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])],
      codigo: [null, Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])],
      nome: [null, Validators.compose([
        Validators.maxLength(50),
        Validators.required
      ])],
      acionamento: [null, Validators.compose([
        Validators.maxLength(10)
      ])],
      capacidade: [null, Validators.compose([
        Validators.maxLength(150),
        Validators.minLength(1),
        Validators.required
      ])],
      condicao_pagamento: [null, Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])],
      preco_venda: [null, Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])],
      observacao: [null, Validators.compose([
        Validators.maxLength(300)
      ])]
    });
  }

  async loadProd(id: string) {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots'
    });
    loading.present();

    this.auth.getProdutoById(id)
      .subscribe(res => {
        this.prodForm.controls._id.setValue(res._id);
        this.prodForm.controls.nome.setValue(res.nome);
        this.prodForm.controls.codigo.setValue(res.codigo);
        this.prodForm.controls.acionamento.setValue(res.acionamento);
        this.prodForm.controls.capacidade.setValue(res.capacidade);
        this.prodForm.controls.condicao_pagamento.setValue(res.condicao_pagamento);
        this.prodForm.controls.preco_venda.setValue(res.preco_venda);
        this.prodForm.controls.observacao.setValue(res.observacao);

        loading.dismiss();
      }, err => {
        console.log(err);
        this.presentToastError('Problemas ao salvar dados do produto!');
        loading.dismiss();
      });
  }

  async editProd() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots'
    });

    loading.present();

    this.auth.attProduto(this.prodForm.value)
      .subscribe(res => {
        const _id = res.prod._id;
        this.presentToastSuccess();
        loading.dismiss();
        this.router.navigate(['/prod-detail/' + _id]);
      }, err => {
        console.log(err);
        this.presentToastError('Problemas ao salvar dados do produto!');
        loading.dismiss();
      });
  }

  async presentToastSuccess() {
    const toast = await this.toastCtrl.create({
      animated: true,
      color: 'success',
      duration: 2000,
      message: 'Dados do produto salvos com sucesso',
      position: 'top'
    });
    toast.present();
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
  }

}
