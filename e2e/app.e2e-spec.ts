import { Spa2Page } from './app.po';

describe('spa2 App', function() {
  let page: Spa2Page;

  beforeEach(() => {
    page = new Spa2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
