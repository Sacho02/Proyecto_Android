import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user: string;
  password: string;
  errorMessage!: string;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'];
    });
    this.user = '';
    this.password = '';
  }

  async login() {
    try {
      const { value } = await Preferences.get({ key: 'userData' });

      if (value) {
        const userData = JSON.parse(value);

        if (userData.usuario === this.user && userData.contrasena === this.password) {
          alert('Inicio de sesión exitoso.');
          this.navCtrl.navigateForward('/leer-qr');
        } else {
          alert('Credenciales incorrectas.');
        }
      } else {
        alert('Usuario no encontrado. Regístrese primero.');
      }
    } catch (error) {
      console.error('Error al acceder a las preferencias:', error);
    }
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  forgotPassword() {
    this.navCtrl.navigateForward('/password-reset');
  }
}

