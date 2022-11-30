import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ActivatedRoute } from '@angular/router';

import { IonicStorageModule, Storage } from '@ionic/storage';

import { browser, element, by} from 'protractor';
import { constants } from 'buffer';

describe('Página de inicio', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule, RouterModule.forRoot([]), IonicStorageModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Debe crear la página de inicio principal', () => {
    expect(component).toBeTruthy();
  });

  
  it('La página principal debe mostrar el texto "SUSHI KITAI""', () => {
    const data=fixture.nativeElement;
    expect(data.querySelector("ion-title").textContent).toContain('Kitai_Sushi');
  }); 

  it('La página principal debe contener el botón "Salir"', () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".btnSalir").textContent).toContain('Salir');
  });

});
