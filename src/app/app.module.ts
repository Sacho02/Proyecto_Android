import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { DatosRegionalesService } from './services/location.service';
import { DatosComunalesService } from './services/location.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([]),
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatosRegionalesService, DatosComunalesService, // Agrega el servicio aquí
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
