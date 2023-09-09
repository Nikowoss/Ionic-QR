import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPaginaWebPage } from './inicio-pagina-web.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPaginaWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPaginaWebPageRoutingModule {}
