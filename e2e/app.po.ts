import { browser, element, by } from 'protractor';

export class AngularWorkshopsSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nk-root h1')).getText();
  }
}
