import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../services/dbservice.service';
import { AutenthicationService } from '../services/autenthication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent{
  constructor(private activeroute: ActivatedRoute, private router: Router, public dbtaskService: DbserviceService, public authenticationSerive:AutenthicationService) {}  
  
}
