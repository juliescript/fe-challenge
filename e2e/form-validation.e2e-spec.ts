import { FeChallengePage } from './app.po';

describe('fe-challenge App', function() {
  let page: FeChallengePage;

  beforeEach(() => {
    page = new FeChallengePage();
  });

  it('should show an error message with email', () => {
    element(by.model('user.email')).sendKeys('testing');
    element(by.css('[type="submit"]')).click();
    expect(element(by.css('email')));
  });

  

});