import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-pagina-web',
  templateUrl: './inicio-pagina-web.page.html',
  styleUrls: ['./inicio-pagina-web.page.scss'],
})
export class InicioPaginaWebPage implements OnInit {

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
    if (this.usuario.username=="nico" && this.usuario.password=="nico"){
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
