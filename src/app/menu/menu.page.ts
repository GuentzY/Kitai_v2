import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private activeroute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
  }
  atras3(){
    this.router.navigate(['/home'])
  }

}
