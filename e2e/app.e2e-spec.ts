import { AtomswiftProtoPage } from './app.po';

describe('atomswift-webapp App', function() {
  let page: AtomswiftProtoPage;

  beforeEach(() => {
    page = new AtomswiftProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
