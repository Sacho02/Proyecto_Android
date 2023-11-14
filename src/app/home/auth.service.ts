import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // AuthService
registerUser(username: string, password: string): boolean {
  const existingUser = localStorage.getItem(username);
  if (existingUser) {
    return false; // Usuario ya existe
  }

  localStorage.setItem(username, password);
  return true; // Registro exitoso
}


  loginUser(username: string, password: string): boolean {
    // Verifica si el usuario y la contraseña coinciden en localStorage
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      return true; // Inicio de sesión exitoso
    }

    return false; // Credenciales inválidas
  }
}

