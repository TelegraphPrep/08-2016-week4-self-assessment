// define loop here
var loop = function(object, callback) {
  for (var key in object) {
    callback(object[key], key);
  }
};

// define extendObj here
var extendObj = function(object, objectExtendBy) {
  loop(objectExtendBy, function(value, key) {
    object[key] = value;
  });
};

// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above
extendObj(Jon, moreCharacteristics);
console.log("Jon: ", Jon);