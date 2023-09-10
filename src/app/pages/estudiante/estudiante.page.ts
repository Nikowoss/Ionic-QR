import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

 usuario={
  username:'',
  password:''
 }

  constructor(
    private router:Router,
    private alertController:AlertController
    ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    if (this.usuario.username=="gaby" && this.usuario.password=="gaby"){
      this.router.navigate(['/pagina-qr-profe'])
    }
    else{
      
      this.presentAlert()
    }

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Correo y/o contraseña incorrectos",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }
}