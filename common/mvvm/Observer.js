import Dep from './Dep'
function observer(data) {
  if (!data || typeof data !== 'object') {
    return 
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

function defineReactive(data, key, val) {
  let dep = new Dep()
  observer(val) // 如果属性值是对象则继续监听
  Object.defineProperty(data, key, {
    enumerable: true, // 可遍历
    configurable: false, // 不能继续定义
    get: function () {
      Dep.target && dep.addSub(Dep.target);
      return val
    },
    set: function(newVal){
      console.log('监听到改变化值', val, '——>', newVal);
      val = newVal
      dep.notify() // 通知所有订阅者
    }
  })
}