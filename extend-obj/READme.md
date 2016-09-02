# Extend Object


extendObj takes two objects and extends the first one with the properties of the second one. 

``` 

var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."}

extendObj(Jon, moreCharacteristics);

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

