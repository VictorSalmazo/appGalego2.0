import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }

  async showConfirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Deseja realmente sair do aplicativo?',
      message: 'Você será redirecionado para o formulário de login.',
      buttons: [{
        text: 'Confirmar',
        handler: () => {
          console.log('Fazendo logout'),
            this.logout();
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log('logout cancelado');
        }
      }]
    });

    confirm.present();
  }

  openPage(namePage: string) {
    this.router.navigateByUrl(namePage);
  }

}
