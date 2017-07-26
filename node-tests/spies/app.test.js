const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('Should call the spy correct', () => {
    let spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('Should call saveUser with user object', () => {
    let email = 'superpower@super.com';
    let password = 'superpower';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
