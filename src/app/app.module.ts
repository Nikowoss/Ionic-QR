import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MenuEstudianteComponent } from './components/menu-estudiante/menu-estudiante.component';


@NgModule({
  declarations: [AppComponent,MenuPrincipalComponent, MenuEstudianteComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [MenuPrincipalComponent, MenuEstudianteComponent],
})
export class AppModule {}
