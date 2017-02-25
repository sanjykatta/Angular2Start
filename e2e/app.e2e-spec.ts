import { Angular2SetupPage } from './app.po';

describe('angular2-setup App', function() {
  let page: Angular2SetupPage;

  beforeEach(() => {
    page = new Angular2SetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
