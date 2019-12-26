let config = {
  type: Phaser.AUTO,
  parent: "phaser-app",
  width: 1024,
  height: 600,
  backgroundColor: "#000",
  pixelArt: true,
  roundPixels: true,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [Preloader, Map1],
  extend: {
    // you instantiate var 'whatever' here (for main scene)
    _player: null,
    _reticle: null,
    _bullets: null,
    _logo: null,
    _gameVersion: null,
    _time: 0
  },
  currentScene: "App",
  title: "Top Down Team",
  version: "1.0",
  activeTool: "none",
  pointerLocked: false
};

config.centerX = Math.round(0.5 * config.width);
config.centerY = Math.round(0.5 * config.height);

var game;
