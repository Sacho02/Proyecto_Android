/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordResetService {
  // Simula una lista de usuarios registrados con nombres de usuario y correos electrónicos
  private usuariosRegistrados = [
    { usuario: 'usuario1', correo: 'usuario1@example.com', contraseña: 'password1' },
    // Agrega más usuarios aquí
  ];

  resetPassword(usernameOrEmail: string): string | null {
    // Busca al usuario por nombre de usuario o correo electrónico
    const user = this.usuariosRegistrados.find((user) => user.usuario === usernameOrEmail || user.correo === usernameOrEmail);

    if (user) {
      // Genera una nueva contraseña (esto debería hacerse de manera segura en una aplicación real)
      const newPassword = 'nueva_contraseña_generada';

      // Actualiza la contraseña del usuario (esto debería hacerse en el servidor en una aplicación real)
      user.contraseña = newPassword;

      // En una aplicación real, aquí enviarías un correo electrónico al usuario con la nueva contraseña.
      return newPassword;
    } else {
      return null; // El usuario no fue encontrado
    }
  }
}
 */
