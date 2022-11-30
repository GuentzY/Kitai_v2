import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule, RouterModule.forRoot([]), IonicStorageModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Debe mostrar el Children por defecto de la página de inicio.', () => {
    expect(component).toBeTruthy();
  });

  it('El children de la página de inicio debe mostrar el botón "Salir"', () => {
    const data=fixture.nativeElement;
    expect(data.querySelector("#promo1").textContent).toContain('Promociones Kitai');
  });

});
