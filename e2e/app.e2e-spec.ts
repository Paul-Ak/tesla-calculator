import { TeslaCalculatorPage } from './app.po';

describe('tesla-calculator App', function() {
  let page: TeslaCalculatorPage;

  beforeEach(() => {
    page = new TeslaCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
