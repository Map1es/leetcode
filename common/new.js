function New(fn, ...arg) {
  const object = Object.create(fn.prototype)
  const ret = fn.apply(object, arg)
  return ret instanceof Object ? ret : object
}

function A(d) {
  this.d = d;
}
let a = New(A, [1, 2, 3]);
console.log(a);
console.log(A);

function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return "handsome boy";
}

var person = New(Otaku, "Kevin", "18");

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // undefined
console.log(person.age); // undefined
