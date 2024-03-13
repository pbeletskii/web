
const mod = require("lodash");
const users = [
    { user: 'fred',   age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred',   age: 40 },
    { user: 'barney', age: 34 }
  ];
  let x = mod.sortBy(users, function(items){return items.age;})
  console.log(x);

