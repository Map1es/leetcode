Function.prototype.myBind = function (thisArg, ...args) {
  if (typeof this !== "function") {
    throw TypeError("Bind must be called on a function");
  }

  let self = this;
  // new优先级
  let fbound = function () {
    self.apply(
      this instanceof self ? this : thisArg,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  // 继承原型上的属性和方法
  fbound.prototype = Object.create(self.prototype);

  return fbound;
};

Function.prototype.myCall = function (thisArg, ...args) {
  if (typeof thisArg !== "function") {
    throw new TypeError("not function");
  }

  const fn = Symbol("fn");
  thisArg = thisArg || window;
  thisArg[fn] = this;
  let result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
};
