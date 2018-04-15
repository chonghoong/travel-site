// function Person(fullName, favColor) {
//   this.name = fullName;
//   this.favoriteColor = favColor;
//   this.greet = function() {
//     console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//   }
// }

// es6 - babel will convert to es5
class Person {
  constructor( fullName, favColor) {
    this.name = fullName;
    this.favouriteColor = favColor;
  }

  // es6 syntax
  greet(){
    console.log("Hello, my name is " + this.name + 
      " and my favourite color is " + this.favouriteColor);
  }
}

// node js way 
// module.exports = Person;

// js way
export default Person;