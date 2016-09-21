var Rat = function( name ) {
  this.name = name;
}

Rat.prototype = {

  touchFood: function( food ) {
    food.poison = true;
  }
}

module.exports = Rat;