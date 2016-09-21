var assert = require( 'assert' );
var Food = require( '../food' );

describe( 'Food', function() {

  beforeEach(function() {
    food = new Food( "Whiskas", 10 );
  })

  it( 'should have a name', function() {
    assert.equal( "Whiskas", food.name );
  })

  it( 'should have a value', function() {
    assert.equal( 10, food.value );
  })
})