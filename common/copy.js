function clone(target) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
};

const target = {
  field1: 1,
  field2: null,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};
let a = clone(target)
let b = JSON.parse(JSON.stringify(target))
a.field4.push(6)
b.field4.push(6)

console.log(b)
console.log(target)