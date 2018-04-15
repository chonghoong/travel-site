var $ = require('jquery');

// this syntax will not work in browser but only in node context
// web browser does not know what require mean or imported file 
// webpack will bundle into a js that will work in user's browser
// var Person = require('./modules/Person');

// using native JavaScript - es6 syntax 
import Person from '/modules/Person';

alert("Testing DEFgh");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smithtyyy", "purple");
jane.greet();

$("h1").remove();