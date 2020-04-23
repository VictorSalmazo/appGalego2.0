import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.page.html',
  styleUrls: ['./prod-add.page.scss'],
})
export class ProdAddPage implements OnInit {

  prodForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) {
    this.prodForm = formBuilder.group({
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

  async saveProduto() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots'
    });
    await loading.present();
    this.auth.addProduto(this.prodForm.value).subscribe(res => {
      const _id = res.prod._id;
      this.presentToastSuccess();
      loading.dismiss();
      this.router.navigate(['prod-detail/' + _id]);
    }, err => {
      console.log(err);
      this.presentToastError();
      loading.dismiss();
    });
  }

  async presentToastSuccess() {
    const toast = await this.toastCtrl.create({
      animated: true,
      color: 'success',
      duration: 1000,
      message: 'Dados da consulta salvos com sucesso',
      position: 'top'
    });
    toast.present();
  }

  async presentToastError() {
    const toast = await this.toastCtrl.create({
      animated: true,
      color: 'danger',
      message: 'Erro ao salvar Consulta! Verifique os dados inseridos.',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
  }

}
