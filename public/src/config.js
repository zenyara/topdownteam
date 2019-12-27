let config = {
  type: Phaser.WEBGL,
  parent: "phaser-app",
  width: 1024,
  height: 600,
  pixelArt: true,
  roundPixels: true,
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
    _background: null,
    _gameVersion: null,
    _time: 0,
    _level: null,
    _controls: null,
    _map: null
  },
  currentScene: "App",
  currentLevel: 0,
  title: "Top Down Team",
  version: "1.0",
  activeTool: "none"
};

config.centerX = Math.round(0.5 * config.width);
config.centerY = Math.round(0.5 * config.height);

var game;
