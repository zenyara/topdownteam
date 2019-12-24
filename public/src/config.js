let config = {
  type: Phaser.AUTO,
  parent: "phaser-app",
  width: 1024,
  height: 600,
  backgroundColor: "#000",
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [Preloader, Map1],
  currentScene: "App",
  title: "Top Down Team",
  version: "1.0",
  bagOpen: false,
  mapOpen: false,
  toolsOpen: false,
  activeTool: "none"
};

config.centerX = Math.round(0.5 * config.width);
config.centerY = Math.round(0.5 * config.height);
