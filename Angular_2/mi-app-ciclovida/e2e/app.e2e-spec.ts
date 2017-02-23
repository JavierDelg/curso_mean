import { MiAppCiclovidaPage } from './app.po';

describe('mi-app-ciclovida App', function() {
  let page: MiAppCiclovidaPage;

  beforeEach(() => {
    page = new MiAppCiclovidaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
