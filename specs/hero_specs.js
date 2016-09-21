var assert = require( 'assert' );
var Hero = require( '../hero' );
var Food = require( '../food' );
var Rat = require( '../rat' );

describe( 'Hero', function() {


  it( 'should have a name', function() {
    var hero1 = new Hero( "Alan" );
    assert.equal( "Alan", hero1.name );
  })

  it( 'should have a health', function() {
    var hero1 = new Hero( "Alan", 100 );
    assert.equal( 100, hero1.health );
  })

  it( 'should have a favourite food', function() {
    var hero1 = new Hero( "Alan", 100, "Pop Tarts" );
    assert.equal( "Pop Tarts", hero1.favouriteFood );
  })

  it( 'should be able to talk', function() {
    var hero1 = new Hero( "Alan", 100, "Pop Tarts" );
    assert.equal( "My name is Alan!", hero1.talk() );
  })

  it( 'should be able to eat', function() {
    var hero1 = new Hero( "Alan", 100, "Pop Tarts" );
    var food1 = new Food( "sausages", 10 )
    hero1.eat(food1);
    assert.equal( 110, hero1.health );
  })

  it( 'should be able to eat favourite food', function() {
    var hero1 = new Hero( "Alan", 100, "Pop Tarts" );
    var food1 = new Food( "Pop Tarts", 10 );
    hero1.eat(food1);
    assert.equal( 110, hero1.health );
  })

  it( 'should be able to eat poisonous food', function() {
    var hero1 = new Hero( "Alan", 100, "Pop Tarts" );
    var food1 = new Food( "Pop Tarts", 10 );
    var rat1 = new Rat( "Rolland" );
    rat1.touchFood(food1);
    hero1.eat(food1);
    assert.equal( 110, hero1.health );
  })
})