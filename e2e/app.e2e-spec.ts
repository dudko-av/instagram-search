import { InstagramSearchPage } from './app.po';

describe('instagram-search App', function() {
  let page: InstagramSearchPage;

  beforeEach(() => {
    page = new InstagramSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
