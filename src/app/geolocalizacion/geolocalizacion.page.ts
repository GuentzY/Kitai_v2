import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  latitud: number;
  longitud: number;

  constructor(private activeroute: ActivatedRoute, private router: Router, public geolocation: Geolocation) { 
   
  
  }
  obtenerCoordenadas(){

    this.geolocation.getCurrentPosition({
      
    }).then((resp) => {
      this.latitud= resp.coords.latitude;
      this.longitud= resp.coords.longitude;
    }).catch((error) => {
      console.log('Error gettin location', error);
    });
    
    
  }
  
  ngOnInit() {
  }
  atras4(){
    this.router.navigate(['/home'])
  }
}
