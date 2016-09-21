var assert = require( 'assert' );
var Rat = require( '../rat' );
var Food = require( '../food' );

describe( "Rat", function() {

  it( 'should have a name', function() {
    var rat1 = new Rat( "Rolland" );
    assert.equal( "Rolland", rat1.name );
  })

  it( 'should be able to touch food', function() {
    var rat1 = new Rat( "Rolland" );
    var food1 = new Food( "sausages", 10 );
    rat1.touchFood(food1);
    assert.equal( true, food1.poison );
  })
})
