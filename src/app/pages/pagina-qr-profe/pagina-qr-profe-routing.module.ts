import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaQRProfePage } from './pagina-qr-profe.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaQRProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaQRProfePageRoutingModule {}
