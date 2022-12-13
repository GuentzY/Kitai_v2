import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-papicar',
  templateUrl: './papicar.page.html',
  styleUrls: ['./papicar.page.scss'],
})
export class PapicarPage implements OnInit {

  constructor(private activeroute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
  }
  atras2(){
    this.router.navigate(['/home'])
  }
}
