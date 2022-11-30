//import { browser } from 'protractor';
import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('Kitai App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('La página del login debe mostrar el texto "SUSHI KITAI" y el mensaje "Bienvenido!"', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Sushi Kitai', 'Bienvenido!');
  });

  it('Debe mostrar el botón INGRESAR', async () => {
    page.navigateTo();
    expect(await page.getButton1().getText()).toContain('INGRESAR');
  });

  it('Debe mostrar el botón REGISTRARSE', async () => {
    page.navigateTo();
    expect(await page.getButton2().getText()).toEqual('REGISTRARSE');
  });

  it('Debe mostrar el texto flotante "Usuario" en el campo NOMBRE USUARIO', async () => {
    page.navigateTo();
    expect(await page.getFloatingText1().getText()).toEqual('Usuario');
  });

  it('Debe mostrar el texto flotante "Password" en el campo CONTRASEÑA', async () => {
    page.navigateTo();
    expect(await page.getFloatingText2().getText()).toEqual('Password');
  });

  /*
  it('Debe llevar a la página principal', async () => {
    page.navigateTo();
    page.getButton1().click();
    expect(await page.getMainPageText()).toContain('Kitai_Sushi');
  });
  */
  
});
