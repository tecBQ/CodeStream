import { CodeStreamFrontendPage } from './app.po';

describe('code-stream-frontend App', function() {
  let page: CodeStreamFrontendPage;

  beforeEach(() => {
    page = new CodeStreamFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
