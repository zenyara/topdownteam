window.onload = function() {
  "use strict";
  game = new Phaser.Game(config);

  // toggle pointer locking
  game._pl = function() {
    // (game.input.mouse.locked) game.input.mouse.releasePointerLock();
    game.input.mouse.requestPointerLock();
  };
};
