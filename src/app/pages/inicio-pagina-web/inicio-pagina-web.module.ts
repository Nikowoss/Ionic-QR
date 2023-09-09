import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPaginaWebPageRoutingModule } from './inicio-pagina-web-routing.module';

import { InicioPaginaWebPage } from './inicio-pagina-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPaginaWebPageRoutingModule
  ],
  declarations: [InicioPaginaWebPage]
})
export class InicioPaginaWebPageModule {}
