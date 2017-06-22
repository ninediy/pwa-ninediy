import { PwaNinediyPage } from './app.po';

describe('pwa-ninediy App', () => {
  let page: PwaNinediyPage;

  beforeEach(() => {
    page = new PwaNinediyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
