import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../services/dbservice.service';
import { AutenthicationService } from '../services/autenthication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private router: Router,
    public dbtaskService: DbserviceService, public authenticationSerive:AutenthicationService) { }

  ngOnInit() {}

  promo(){
    this.router.navigate(['/menu'])
  }
  
  navigate2(){
    this.router.navigate(['/promociones'])
  }
  
  navigate3(){
    this.router.navigate(['/papicar'])
  }

  navigate(){
    this.router.navigate(['/geolocalizacion'])
  }
  
  navigate1(){
    this.router.navigate(['/pruebaapi'])
  }
  
  
}