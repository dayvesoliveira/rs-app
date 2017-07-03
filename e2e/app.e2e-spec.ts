import { RsAppPage } from './app.po';

describe('rs-app App', () => {
  let page: RsAppPage;

  beforeEach(() => {
    page = new RsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
