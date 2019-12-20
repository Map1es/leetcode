class Foo {
  sayThis () {
    console.log(this); // 这里的 `this` 指向谁？
  }

 exec (cb) {
   cb.bind(this)();
 }

 render () {
   this.exec(this.sayThis);
 }
}

var foo = new Foo();
foo.render(); // 输出结果是什么？

