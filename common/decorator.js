class Circle {
  draw() {
      console.log('画一个圆形');
  }
}

class Decorator {
  constructor(circle) {
      this.circle = circle;
  }
  draw() {
      this.circle.draw();
      this.setRedBorder(circle);
  }
  setRedBorder(circle) {
      console.log('画一个红色边框');
  }
}

let circle = new Circle();
let decorator = new Decorator(circle);
decorator.draw(); //画一个圆形，画一个红色边框
