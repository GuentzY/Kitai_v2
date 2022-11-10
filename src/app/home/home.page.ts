import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../services/dbservice.service';
import { AutenthicationService } from '../services/autenthication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  

  constructor(private activeroute: ActivatedRoute, private router: Router, public dbtaskService: DbserviceService, public authenticationSerive:AutenthicationService) {}

  
  /**
   * Función que permite navegar entre componentes
   * mediante la URL
   * @param $event 
   */
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value;
    this.router.navigate(['home/'+direction]);
  }
 
  ionViewWillEnter(){
    this.router.navigate(['home/comidas']);
  }
 
  logout(){
    this.authenticationSerive.logout();
  }

}
