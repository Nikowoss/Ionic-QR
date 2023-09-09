import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario={
    username:'',
    password:''
   }
  valid_pass={
    pass1:'',
    pass2:'',
  }
  
    constructor(
      private router:Router,
      private alertController:AlertController
      ) { }
  
    ngOnInit() {
    }
  
    onSubmit()
    {
      if (this.valid_pass.pass1==this.valid_pass.pass2){
        this.router.navigate(['/pagina-qr-profe'])
      }
      else{
        
        this.presentAlert()
      }
  
    }
  
  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: "Datos mal ingresados",
        buttons: ['OK'],
        backdropDismiss:false,
        
      });
  
      await alert.present();
  
   
    }
  }
  
