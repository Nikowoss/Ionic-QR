import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { MenuEstudianteComponent } from './menu-estudiante/menu-estudiante.component';



@NgModule({
  declarations: [MenuEstudianteComponent],
  exports:[MenuEstudianteComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
