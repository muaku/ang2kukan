import { Ang2kukanPage } from './app.po';

describe('ang2kukan App', function() {
  let page: Ang2kukanPage;

  beforeEach(() => {
    page = new Ang2kukanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
