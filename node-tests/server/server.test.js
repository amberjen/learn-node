const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('Should return hello response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        // .expect({
        //   error: 'Page not found'
        // })
        // .expect('Hello welcome to my world!')
        .end(done);
    });
  })

  describe('GET /users', () => {
    it('Should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Super Woman',
            age: 100
          });
        })
        .end(done);
    });
  });



});
