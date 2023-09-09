import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-qr-profe',
  templateUrl: './pagina-qr-profe.page.html',
  styleUrls: ['./pagina-qr-profe.page.scss'],
})
export class PaginaQRProfePage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }

  onClick(){
    this.menu.toggle();
  }

}
