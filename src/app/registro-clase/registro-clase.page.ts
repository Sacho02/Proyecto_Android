import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { GeolocationPosition } from '@capacitor/geolocation';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

const { Storage } = Plugins;

@Component({
  selector: 'app-registro-clase',
  templateUrl: './registro-clase.page.html',
  styleUrls: ['./registro-clase.page.scss'],
})
export class RegistroClasePage implements OnInit {
  qrData!: string;
  currentTimestamp!: string;
  nombre!: string;
  apellido!: string;
  rut!: string;
  RegionId: any;
  regionId: number = 0;
  ComunaId: any;
  comuna: any;
  region: any;
  public NombreComuna!: string;
  preferences: any;
  public NombreRegion!: string;
  imageSrc: string | undefined;
  public latitud: number;
  public longitud: number;
  navCtrl: any;

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, private router: Router) {this.latitud = 0;
    this.longitud = 0; }

  goBack() {
    this.navCtrl.back();
  }

  handleError(error: any): void {
    if (error.status === 404) {
      this.navCtrl.navigateRoot('/login', {
        queryParams: { error: 'La página que intentó acceder no se encontró.' }
      });
    } else {
    }}

    async obtenerCoordenadasGPS() {
      try {
        const coordinates: GeolocationPosition = await Geolocation.getCurrentPosition();
        this.latitud = coordinates.coords.latitude;
        this.longitud = coordinates.coords.longitude;
      } catch (error) {
        console.error('Error al obtener las coordenadas GPS:', error);
      }
    }

  async ngOnInit() {
    const state = window.history.state;
    if (state && state.qrData) {
      console.log('Funcionando');
      this.qrData = state.qrData;
    } else {
    }

    const now = new Date();
    this.currentTimestamp = `${this.padZero(now.getHours())}:${this.padZero(now.getMinutes())}`;

    const { value } = await Preferences.get({ key: 'userData' });
    if (value) {
      const userData = JSON.parse(value);
      this.nombre = userData.nombre;
      this.apellido = userData.apellido;
      this.rut = userData.rut;
      this.region = userData.region;
      this.comuna = userData.comuna;
    }
  }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.imageSrc = image.dataUrl;
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  async selectFromGallery() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    this.imageSrc = image.dataUrl;
  }

  mostrarAlerta() {
    const mensaje = '¡Asistencia registrada correctamente!';
    alert(mensaje);
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  regresarALogin() {
    this.router.navigate(['/login']);
  }
}






