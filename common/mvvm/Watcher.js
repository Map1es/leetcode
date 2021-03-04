import Dep from './Dep'
function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解
  this.value = this.get(); 
}

Watcher.prototype = {
  update: function () {
    this.run()
  },
  run: function () {
    let value = this.get()
    let oldValue = this.value
    if (value !== oldValue) {
      this.value = value
      this.cb.call(this.vm, value, oldValue) // 执行Compile中绑定的回调，更新视图
    }
  },
  get: function(key) {
    Dep.target = this;
    let value = this.vm[exp]
    Dep.target = null
    return value
  }
}

export default Watcher