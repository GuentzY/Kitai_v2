import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';
@Component({
  selector: 'app-pruebaapi',
  templateUrl: './pruebaapi.page.html',
  styleUrls: ['./pruebaapi.page.scss'],
})
export class PruebaapiPage implements OnInit {
  getdata:any[]=[];
  constructor(public _services: GetapiService) { 
    this._services.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    }
      
      )
  }

  ngOnInit() {
  }

}