import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaQRProfePageRoutingModule } from './pagina-qr-profe-routing.module';

import { PaginaQRProfePage } from './pagina-qr-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaQRProfePageRoutingModule
  ],
  declarations: [PaginaQRProfePage]
})
export class PaginaQRProfePageModule {}
