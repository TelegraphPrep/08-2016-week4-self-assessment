// define loop here
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

// define extendObj here
var extendObj = function(obj1, obj2) {
  loop(obj2, function(value, key) {
    obj1[key] = value;
  });
};

// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above
console.log("Jon before: ", Jon);
extendObj(Jon, moreCharacteristics);
console.log("Jon after: ", Jon);

// extra credit:
var extendByManyObjs = function(obj1, arrayOfObjs) {
  loop(arrayOfObjs, function(object) {
    loop(object, function(value, key) {
      obj1[key] = value;
    });
  });
};

var evenMoreCharacteristics = {sportGrowingUp: "extreme table tennis", creditCardNumber: 93481847};

// console.log("Jon before: ", Jon);
// extendByManyObjs(Jon, [moreCharacteristics, evenMoreCharacteristics]);
// console.log("Jon after: ", Jon);
