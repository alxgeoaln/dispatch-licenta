import { DispatchLicentaPage } from './app.po';

describe('dispatch-licenta App', () => {
  let page: DispatchLicentaPage;

  beforeEach(() => {
    page = new DispatchLicentaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
