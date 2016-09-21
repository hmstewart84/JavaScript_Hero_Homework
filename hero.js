var Hero = function( name, health, favouriteFood ) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  talk: function() {
    return "My name is Alan!"
  },

  eat: function() {
    if ( food.name === this.favouriteFood ) {
      this.health += (food.value * 1.5 )
    } else {
      this.health += food.value;
    }
  },

  poison: function() {
    if (food.poison === true ) {
      this.health -= food.value ;
    } else {
      this.health += food.value;
    }
  }

  timeTravel: function() {
    return "I'm in the DeLorean!!";
  }
}

var hero1 = new Hero( "Alan", 32, "Pop Tarts" );

console.log( 'hero1', hero1 );
console.log( 'hero1 talk', hero1.talk() );


module.exports = Hero;
