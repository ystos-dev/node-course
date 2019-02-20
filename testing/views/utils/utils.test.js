const utils = require('./utils');
const expect = require('expect');

it('should add 2 numbers', () => {
    var res = utils.add(33, 11);

    expect(res)
    .toBe(44)
    .toBeA('number');
});

it('should calculate square', () => {
    var res = utils.square(2);

    expect(res).toBe(4).toBeA('number');
});

it('should expect somevalues', () => {
    expect({name: '1'}).toInclude({name: 1});
});

it('should verify first and last names are set', () => {
    var user = {};
    utils.setName(user, 'Yuriy Stos');

    expect(user).toInclude({firstName: "Yuriy", lastName: 'Stos'});
});