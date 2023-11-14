import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { HttpClient } from '@angular/common/http';
import { DatosRegionalesService } from 'src/app/services/location.service';
import { DatosComunalesService } from 'src/app/services/location.service';


  @Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  region: any;
  comuna: any;
  comunas: any[] = [];
  regionSeleccionada: number = 0;
  comunaSeleccionada: number = 0;
  filtroComuna: string = '';
  nombre: string;
  apellido: string;
  rut: string;
  carrera: string;
  usuario: string;
  contrasena: string;
  repetirContrasena: string;
  RegionId: number = 0;
  regionId: number = 0;
  selectedComunaId: any;
  NombreRegion: string = '';
  ComunaId: number = 0;
  NombreComuna: string = '';
  http: any;

  constructor(private navCtrl: NavController, private httpClient: HttpClient, private datosRegionalesService: DatosRegionalesService, private datosComunalesService: DatosComunalesService) {
    this.nombre = '';
    this.apellido = '';
    this.rut = '';
    this.carrera = '';
    this.usuario = '';
    this.contrasena = '';
    this.repetirContrasena = '';
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.obtenerRegiones();
    this.obtenerComunas();
  }

  ionViewWillEnter() {
    this.obtenerRegiones();
  }

  obtenerRegiones(){
    this.datosRegionalesService.obtenerRegiones().subscribe((data)=>{
        this.region = data.data;
      },
      (error)=>{
        console.error('Error no se pueden obtener las regiones: ', error);
      }
    );
  }

/*   obtenerComunas(){
    this.datosComunalesService.obtenerComunas(region.id).subscribe((data)=>{
        this.comuna = data;
      },
      (error)=>{
        console.error('Error no se pueden obtener las comunas: ', error);
      }
    );
  } */

  obtenerComunas(){
    this.datosComunalesService.obtenerComunas().subscribe((data)=>{
        this.comuna = data.data;
      },
      (error)=>{
        console.error('Error no se pueden obtener las comunas: ', error);
      }
    );
  }

  isValidForm(): boolean {
    const validations = [
      this.nombre && this.nombre.length >= 4,
      this.apellido && this.apellido.length >= 4,
      this.rut && this.rut.length >= 9 && this.rut.length <= 12,
      this.contrasena && this.contrasena.length >= 3,
      this.usuario && this.usuario.length >= 4,
      this.region && this.region.length > 0,
      this.comuna && this.comuna.length > 0,
    ];
    return validations.every(valid => valid === true);
  }

  async register() {
    if (this.contrasena !== this.repetirContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
      carrera: this.carrera,
      usuario: this.usuario,
      contrasena: this.contrasena,
      region: this.NombreRegion,
      comuna: this.NombreComuna,
      RegionId: this.RegionId,
      ComunaId: this.ComunaId,
    };

    try {
      await Preferences.set({
        key: 'userData',
        value: JSON.stringify(userData),
      });

      alert('Registro exitoso. Puede iniciar sesión.');
      this.navCtrl.navigateForward('/login');
    } catch (error) {
      console.error('Error al guardar en el Storage de Capacitor', error);
    }
  }

  onRegionChange() {
    const NombreRegion = this.region.find((region: { id: any; }) => region.id === this.regionId);
    this.selectedComunaId = null;
    if (NombreRegion) {
      this.NombreRegion = NombreRegion.nombre;
    }
  }

  onComunaChange() {
    const NombreComuna = this.comuna.find((comuna: { id: any; }) => comuna.id === this.ComunaId);
    this.selectedComunaId = null;
    if (NombreComuna) {
      this.NombreComuna = NombreComuna.nombre;
    }
  }

  forgotPassword() {
    this.navCtrl.navigateForward('/password-reset');
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  login() {
    this.navCtrl.navigateForward('/login');
  }
}
