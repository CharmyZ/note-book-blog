import { Angular2RedditPage } from './app.po';

describe('angular2-reddit App', function() {
  let page: Angular2RedditPage;

  beforeEach(() => {
    page = new Angular2RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
