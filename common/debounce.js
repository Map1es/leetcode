function debounce(fn, delay, immediate) {
  let timeout = null
  return function () {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      let callNow = !timeout
      timeout =  setTimeout(() => {
        timeout = null
      }, delay)
      if (callNow) {
        fn.apply(this, arguments)
      }
    } else {
      timeout = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  };
}

function throttle(fn, interval = 300) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, interval);
  };
}

function test() {
  console.log('11111')
}

debounce(test(), 200, true)