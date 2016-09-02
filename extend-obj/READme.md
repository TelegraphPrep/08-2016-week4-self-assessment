# Extend Object


extendObj takes two objects and extends the first one with the properties of the second one.

NOTES:

1. You are altering the first object itself, not making a copy of it. (If I console.log that object before and after calling my extendObj function on it, the same object would look different).

2. extendObj does not need to return anything - calling it just alters the first object passed in but doesn't give anything back (see how in the below example we're not console.logging the line where we call extendObj, but rather console.logging the first object again instead). 

``` 

var Jon = {name: "Jon", fear: "koala bears"};

// console.logging the Jon object BEFORE it's passed into extendObj (obviously just looks like it's declaration above)
console.log(Jon);
// {name: "Jon", fear: "koala bears"};

var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."}

extendObj(Jon, moreCharacteristics);

// console.logging the Jon object AFTER it's passed into extendObj now shows how it's been altered
console.log(Jon);
// {name: "Jon", fear: "koala bears", favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

```

* [ ] Build `loop`. Please don't refer back to how we've written loop in previous sprints or slides.

* [ ] Build `extendObj` using `loop`.

EXTRA CREDIT: 
* [ ] Expand `extendObj` to be able to extend the first object by as many objects that are passed in.

```
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."}

var evenMoreCharacteristics = {sportGrowingUp: "extreme table tennis", creditCardNumber: 93481847};

extendObj(Jon, [moreCharacteristics, evenMoreCharacteristics]);

console.log(Jon);
// {name: "Jon", fear: "koala bears", favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984.", sportGrowingUp: "extreme table tennis", creditCardNumber: 93481847};


```

