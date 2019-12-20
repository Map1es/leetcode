function New(fn, ...arg) {
  const object = Object.create(fn.prototype)
  const ret = fn.apply(object, arg)
  return ret instanceof Object ? ret : object
}

function A(d) {
  this.d = d;
}
let a = New(A, [1, 2, 3])
console.log(a)
console.log(A)