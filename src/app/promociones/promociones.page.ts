import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  constructor(private activeroute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
  }
  atras(){
    this.router.navigate(['/home'])
  }

}
