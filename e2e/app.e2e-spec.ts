import { CompanyFinancesAngularClientPage } from './app.po';

describe('company-finances-angular-client App', () => {
  let page: CompanyFinancesAngularClientPage;

  beforeEach(() => {
    page = new CompanyFinancesAngularClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
