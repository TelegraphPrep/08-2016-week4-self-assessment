# Use filterBy

`filterBy` is a higher order function that is built on top of `loop`. Much like `transform`, `filterBy` takes a `collection` and a `callback`. However, the type of `callback` that `filterBy` takes does not ***transform*** each value, rather, it will check it against a truth test and return true or false. We call these type of functions `predicates`.

Here is an example:

```
// predicate function
var isEven = function(number){
    return number % 2 === 0;
};

var definitelyEven = isEven(2);
console.log(definitelyEven) // true;

```

Each element in the collection is passed as an argument to the `predicate`, and filterBy only collects the element if it passes the truth test.

Here is an example:

```

var numbers = [1, 2, 3, 4, 5];

var evenNumbers = filterBy(numbers, isEven);

console.log(evenNumbers) // [2, 4];

```
* [ ] Build `loop` (or copy what you wrote in the Extend Obj prompt to define loop here).

* [ ] use filterBy on the `numbers collection` to return an array of odd numbers.

* [ ] use filterBy on the `numbers collection` to return an array of numbers that are smaller than the threshold.

* [ ] use filterBy on the `people collection` to return an array of names who's age is between 27 and 35.