// define loop here:


// we've written filterBy for you here:
var filterBy = function(collection, predicate) {
  var result = [];
  loop(collection, function(elem) {
    if (predicate(elem)) {
      result.push(elem);
    }
  });
  return result;
};

// use filterBy on the `numbers collection` to return an array of odd numbers
var numbers = [22, 25, 78, 61, 36, 981, 313];

// use filterBy on the `numbers collection` to return an array of numbers that are smaller
// than the threshold.
var threshold = 75;


// use filterBy on the `people collection` to return an array of objects who's age is between 27 and 35.
var people = [{name: "Albrey", age: 25}, {name: "Dion", age: 26}, {name: "Kmack", age: 28}, {name: "Kanye", age: 32}, {name: "Beyonce", age: 39}, {name: "Jay-z", age: 42}];