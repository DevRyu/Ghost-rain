function init() {
  pressKey();

  setInterval(function () {
    let test1 = new Enemy();
    test1.moveDown();
  }, 1000)
}

window.onload = init();