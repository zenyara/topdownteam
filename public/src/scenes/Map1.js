var Map1 = new Phaser.Scene("Map1");

Map1.preload = function() {
  config.currentScene = "Map1";
};
//End Map1.preload()

//
// executed once, after assets were loaded
Map1.create = function() {
  _logo = new Logo(this);

  _gameVersion = new GameVersion(this);

  this.backpackicon = new BackpackIcon(this);

  this.backpackui = new BackpackUI(this);

  this.mapicon = new MapIcon(this);

  this.mapui = new MapUI(this);

  this.toolicon = new ToolIcon(this);

  this.toolui = new ToolUI(this);

  // Set world bounds
  this.physics.world.setBounds(0, 0, 1600, 1200);

  // Set camera properties
  this.cameras.main.zoom = 1;

  // Add-in our player and reticle
  _player = new Player(this);
  _reticle = new Reticle(this);
  _player.addReticle(_reticle.reticle);
  _reticle.addPlayer(_player.player);

  // Locks pointer on mousedown [releases on Q,V,M,I(in their classes) or escape (by default) is pressed.]
  game.canvas.addEventListener("mousedown", function() {
    if (config.activeTool == "none") {
      game.input.mouse.requestPointerLock();
      config.pointerLocked = true;
    }
  });
};
//END MAP1.create if
// UPDATE everything
Map1.update = function(time, delta) {
  _player.update();
  _reticle.update();
};
