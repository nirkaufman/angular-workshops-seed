import { AngularWorkshopsSeedPage } from './app.po';

describe('angular-workshops-seed App', () => {
  let page: AngularWorkshopsSeedPage;

  beforeEach(() => {
    page = new AngularWorkshopsSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nk works!');
  });
});
