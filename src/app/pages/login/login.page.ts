import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;
  tipo: boolean;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  passwdVisibility() {
    this.tipo = !this.tipo;
  }

  singIn() {
    this.auth.singIn(this.credentialsForm.value).subscribe(user => {

      const role = user.usuario.role;

      if (role === 'ADMIN') {
        this.router.navigateByUrl('/admin-dashboard');
      } else if (role === 'USER') {
        this.router.navigateByUrl('/user-dashboard');
      }
    }, err => {
      console.log(err.error.msg);
      if (err.status === 400) {
        this.showAlert(err.error.msg);
      } else {
        this.showAlert('Problemas ao realizar login, por favor verifique sua conexão com a internet!');
      }
    });
    this.credentialsForm.reset();
  }

  async showAlert(msg) {
    const toast = await this.toastCtrl.create({
      animated: true,
      color: 'danger',
      message: msg,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

}
