/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob(name) {
  this.name = name;

  //this.lifespan = 0;
  //this.rate = 0;
}

var blob = new Blob("blob");

var population = 1000;
var peoplePerHour = 1;
var eaten;
var i;

if (population === 0 || peoplePerHour === 0) {
  i = 0;

} else {

  for (i = 0; i <= population; i++) {

    eaten = peoplePerHour * i;
    population = population - eaten;

    console.log(population + " left");
    console.log(i + " hours passed");
  }
}
console.log(i);
var hoursSpentInDowington = i; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

blob.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  var eaten;
  var i;

  if (population === 0 || peoplePerHour === 0) {
    alert("hi");
    i = 0;
    return i;

  } else {

    for (i = 0; i <= population; i++) {

      eaten = peoplePerHour * i;
      population = population - eaten;

      console.log(population + " left");
      console.log(i + " hours passed");
    }
  }
  console.log(i);
  return i;
};

//Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(1000, 0) === 0, "zero people per hour means no time needed.");
assert(blob.hoursToOoze(1000, 2) === 32, "result for population of 1000 should be 32 with peoplePerHour = 2");
assert(blob.hoursToOoze(100, 1) === 14, "result for population of 100 should be 14 with peoplePerHour = 1");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing(planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.planet = planet;
  this.language = language;
  this.sayHello = function(sb) {
    console.log(hello[this.language]);
    return hello[sb.language];
  };
}

// sb is a SentientBeing object
function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
}

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
var Klingon = function() {
  this.planet = "Qo\"noS";
  this.language = "klingon";
  this.sayHello = function(sb) {
    console.log(hello[this.language]);
    return hello[sb.language];
  };
};
var Human = function() {
  this.planet = "Earth";
  this.language = "federation standard";
  this.sayHello = function(sb) {
    console.log(hello[this.language]);
    return hello[sb.language];
  };
};
var Romulan = function() {
  this.planet = "Romulus";
  this.language = "romulan";
  this.sayHello = function(sb) {
    console.log(hello[this.language]);
    return hello[sb.language];
  };
};

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru", "the romulan should hear Jolan\"tru");
assert((new Klingon()).sayHello(new Human()) === "hello", "the human should hear hello");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru", "the romulan should hear Jolan\"tru");
assert((new Romulan()).sayHello(new Human()) === "hello", "the human should hear hello");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH", "the klingon should hear nuqneH");

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

function lastLetterSort(stringArray) {
    // a and b are strings.
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
    return a[a.length - 1] > b[b.length - 1];
  }
  stringArray.sort(byLastLetter);
  //console.log(stringArray);
  return stringArray;
}
var strArray = [ "apple", "tomato", "banana", "melon" ];
console.log(lastLetterSort(strArray));

assert(strArray[0].length === 6, "first word should be 6 letters long.");
assert(lastLetterSort(strArray).length === strArray.length, "result should be equal in length to starting string length.");

var myArr = [ 3, 1, 2 ];
function sumArray(numberArray) {
  var sum = 0;

  $(numberArray).each(function(index, number) {
    sum += number;
  });
  return sum;
}

assert(sumArray([ 0, 0, 0 ]) === 0, "result should equal 0.");
assert(sumArray([ 3, 1, 2 ]) === 6, "result should equal 6.");

//sumSort sorts a two-dimensional array of numbers by the sums of the arrays.

var arrOfArrs = [ [ 3, 1, 2, 3 ], [ 4, 3 ], [ 1, 2, 9 ] ];
function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    //  sum the ints in the arrays and sort them
    //  a is the first array of ints, b is the second array of ints
    console.log(sumArray(a) - sumArray(b));
    return sumArray(a) - sumArray(b);
  });
  return arrayOfArrays;
}
console.log(sumSort(arrOfArrs));

$(arrOfArrs).each(function(index, value) {
  console.log(value);
});

assert(sumSort(arrOfArrs).length === arrOfArrs.length, "result should be equal in length to starting array length.");
assert(sumArray(arrOfArrs[0]) === 7, "array at index 0 should be of sum = 7");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
