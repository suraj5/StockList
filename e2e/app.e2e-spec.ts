import { StockExamplePage } from './app.po';

describe('stock-example App', () => {
  let page: StockExamplePage;

  beforeEach(() => {
    page = new StockExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
