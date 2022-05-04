const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
// const { strictEqual } = require('assert');

describe('Park', function () {
  let park;
beforeEach(function () {
    park = new Park('Isla Nublar', 1)
  });
it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual (actual, 'Isla Nublar');
  });
it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual (actual, 1);
  });
it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual,[]);
  });
it('should be able to add a dinosaur to its collection', function () {
    const actual = park.dinosaurCollection.push("Barney");
    assert.strictEqual(actual, 1);
  });
it('should be able to remove a dinosaur from its collection', function () {
  park.addDino('T-Rex')
  park.addDino('pegasaur')
  park.removeDinoByName('pegasaur')
  const expected = ['T-Rex']
  const actual = park.dinosaurCollection
  assert.deepStrictEqual(actual,expected);
});
it('should be able to find the dinosaur that attracts the most visitors', function (){
  park.popularDino()

});

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
