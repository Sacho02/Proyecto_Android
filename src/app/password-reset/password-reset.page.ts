import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-password-reset',
  templateUrl: 'password-reset.page.html',
  styleUrls: ['password-reset.page.scss'],
})
export class PasswordResetPage {
  user: string;
  newPassword: string;

  constructor(private navCtrl: NavController) {
    this.user = '';
    this.newPassword = '';
  }

  async resetPassword() {
    try {
      // Verifica si el nombre de usuario existe en Capacitor Storage
      const { value } = await Preferences.get({ key: 'userData' });

      if (!value) {
        alert('El nombre de usuario no existe.');
        return;
      }

      // Parsea los datos del usuario desde Capacitor Storage
      const userData = JSON.parse(value);

      // Verifica si el nombre de usuario proporcionado coincide
      if (userData.usuario !== this.user) {
        alert('El nombre de usuario no es válido.');
        return;
      }

      // Actualiza la contraseña en los datos del usuario
      userData.contrasena = this.newPassword;

      // Almacena los datos del usuario actualizados en Capacitor Storage
      await Preferences.set({ key: 'userData', value: JSON.stringify(userData) });

      alert('Contraseña actualizada con éxito. Puede iniciar sesión con su nueva contraseña.');
      this.navCtrl.navigateForward('/login'); // Redirige a la página de inicio de sesión.
    } catch (error) {
      console.error('Error al acceder al almacenamiento de Capacitor:', error);
    }
  }
  goBack() {
    this.navCtrl.back();
  }
}
