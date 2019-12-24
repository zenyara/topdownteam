/* This initiates Phaser.io ver 3 to run, loading up all of the "Scenes". */
var App = function() {};

App.prototype.start = function() {
  let p = new Phaser.Game(config);
};

/* Trigger Load of App.js (Phaser.io ver 3)*/
window.onload = function() {
  "use strict";
  new App().start();
};
