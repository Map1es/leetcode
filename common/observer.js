class targetObj {
  constructor(name) {
    this.name = name;
    this.state = 0
    console.log(`${this.name}初始状态${this.state}`)
  }

  getState() {
    return this.state
  }

  setState(state) {
    //  改变状态值时
    this.state = state;
    observer(this, this.state)
  }

}

// 观察者
function observer(obj, state) {
  // 发现变动后的操作
  console.info(`${obj.name}动了, state变成了${state}`);
}
let xiaoming = new targetObj('xiaoming');
let xiaohong = new targetObj('xiaohong');
let xiaojun = new targetObj('xiaojun');

xiaoming.setState(1)
setTimeout(() => {
  xiaohong.setState(1)
}, 1000)
setTimeout(() => {
  xiaojun.setState(1)
}, 2000)
