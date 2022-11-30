import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('app-login ion-title')).getText();
  }

  getButton1(){
    return element(by.css('app-login .btnIngresar'));
  }
  
  getButton2(){
    return element(by.css('app-login .btnRegistrar'));
  }

  getFloatingText1(){
    return element(by.css('app-login .floatUser'));
  }

  getFloatingText2(){
    return element(by.css('app-login .floatPassword'));
  }

/*
  getMainPageText(){
    return element(by.css('app-home ion-title')).getText();
  }
  */

}
