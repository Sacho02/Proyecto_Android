import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, ScanResult } from '@capacitor-community/barcode-scanner';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leer-qr',
  templateUrl: 'leer-qr.page.html',
  styleUrls: ['leer-qr.page.scss'],
})
export class LeerQRPage implements OnInit {
  qrData!: string; // Variable para almacenar el resultado del escaneo

  constructor(private navCtrl: NavController) {}

  async ngOnInit() {
    await this.solicitarPermisos();
  }

  async solicitarPermisos() {
    try {
      const resultado: ScanResult = await BarcodeScanner.startScan();

      if (resultado.hasContent) {
        // Aquí puedes usar resultado.content que contiene el valor del código QR escaneado.
        this.qrData = resultado.content;
      }
    } catch (error) {
      console.error('Error al escanear el código QR:', error);
    }
  }

  navigateToNextPage() {
    if (this.qrData) {
      this.navCtrl.navigateForward('/registro-clase', { state: { qrData: this.qrData } });
    }
  }
}
