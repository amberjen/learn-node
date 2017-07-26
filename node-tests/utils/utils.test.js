// Test case
// Mocha: BDD (Behavior Driven Design)

const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('Should add two numbers', () => {
      let res = utils.add(33, 11);

      // if(res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}.`);
      // }

      expect(res).toBe(44).toBeA('number');

    });
  });

  it('Should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('Should squre a number', () => {
    let res = utils.square(7);

    // if(res !== 49) {
    //   throw new Error(`Expected 49, but got ${res}`);
    // }

    expect(res).toBe(49).toBeA('number');
  });

  it('Should async square a number', (done) => {
    utils.asyncSquare(7, (res) => {
      expect(res).toBe(49).toBeA('number');
      done();
    });
  });
});



it('Should expect some values', () => {
  // expect(12).toNotBe(11);

  // Object
  // expect({ name: 'Super Man'}).toEqual({name: 'Super Man'})
  // expect({ name: 'Super Man'}).toNotEqual({name: 'Super Man'})


  // expect([2,3,4]).toInclude(5);
  // expect([2,3,4]).toExclude(5);

  // expect({
  //   name: 'Super Heores',
  //   age: 100,
  //   location: 'The Moon'
  // }).toInclude({
  //   age: 100
  // });

});

// Assert it includes firstName and lastname with proper values
// type toBeA('string')
it('Should set firstName and lastName', () => {
  let user = {
    location: 'Heaver',
    age: 101
  };

  let res = utils.setName(user, 'Super Man');

  // expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Super',
    lastName: 'Man'
  })

});
