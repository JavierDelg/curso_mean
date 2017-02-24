import { AppClientNgPage } from './app.po';

describe('app-client-ng App', function() {
  let page: AppClientNgPage;

  beforeEach(() => {
    page = new AppClientNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
