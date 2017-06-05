import { OlaMundoPage } from './app.po';

describe('ola-mundo App', () => {
  let page: OlaMundoPage;

  beforeEach(() => {
    page = new OlaMundoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
