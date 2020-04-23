import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private alertCtrl: AlertController) { }

  canActivate(next: ActivatedRouteSnapshot) {

    return this.auth.user.pipe(
      take(1),
      map(user => {
        if (user) {
          return true;
        } else {
          this.showAlert();
          return this.router.parseUrl('/login');
        }
      })
    );

  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Permissão Negada',
      message: 'Você não tem permissão para acessar esse conteúdo!',
      buttons: ['OK']
    });

    alert.present();
  }

}
