// define loop here:
var loop = function(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object') {
    for (var key in collection) {
      callback(collection[key], key);
    }
  }
};

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

// use filterBy on the `numbers` collection to return an array of odd numbers
var numbers = [22, 25, 78, 61, 36, 981, 313];
var oddNumbers = filterBy(numbers, function(number) {
  return number % 2 !== 0;
});
console.log("oddNumbers: ", oddNumbers);

// use filterBy on the `numbers` collection to return an array of numbers that are smaller than the threshold.
var threshold = 75;
var smallerThanThreshold = filterBy(numbers, function(number) {
  return number < threshold;
});
console.log("smallerThanThreshold: ", smallerThanThreshold);

// use filterBy on the `people` collection to return an array of objects whose age is between 27 and 35.
var people = [{name: "Albrey", age: 25}, {name: "Dion", age: 26}, {name: "Kmack", age: 28}, {name: "Kanye", age: 32}, {name: "Beyonce", age: 39}, {name: "Jay-z", age: 42}];
var ageBtwn = filterBy(people, function(person) {
  return person.age >= 27 && person.age <= 35;
});
console.log("ageBtwn: ", ageBtwn);
