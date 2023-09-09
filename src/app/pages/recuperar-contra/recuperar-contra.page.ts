import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  constructor(
    private alertController:AlertController,
    private router:Router
  ) { }
  usuario={
    username:''
   }
  ngOnInit() {
  }
  onSubmit()
  {
    if (this.usuario.username=="nico"){
      this.presentAlertAA()
      this.router.navigate(['/inicio-pagina-web'])
    }
    else{
      
      this.presentAlert()
    }

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Correo no valido",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }
  async presentAlertAA() {
    const alert = await this.alertController.create({
      header: 'Enviado',
      subHeader: 'Información',
      message: "Correo enviado, mira tu bandeja de entrada",
      buttons: ["Ir al inicio"],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }
}
