var Map1 = new Phaser.Scene("Map1");

Map1.preload = function() {
  config.currentScene = "Map1";
};
//End Map1.preload()

//
// executed once, after assets were loaded
Map1.create = function() {
  // fill the background with a static image due to "overlap"
  _background = this.add.tileSprite(0, 0, 6133, 5640, "bgsand");
  _logo = new Logo(this);
  _gameVersion = new GameVersion(this);
  this.backpackicon = new BackpackIcon(this);
  this.backpackui = new BackpackUI(this);
  this.mapicon = new MapIcon(this);
  this.mapui = new MapUI(this);
  this.toolicon = new ToolIcon(this);
  this.toolui = new ToolUI(this);

  // Set camera properties
  this.cameras.main.zoom = 1;

  // Add-in our player and reticle
  _player = new Player(this);
  _reticle = new Reticle(this);
  _player.addReticle(_reticle.reticle);
  _reticle.addPlayer(_player.player);

  /*
  _map = this.make.tilemap({
    key: "map0",
    tileWidth: 32,
    tileHeight: 32,
    margin: 1,
    spacing: 1
  });*/

  _map = this.make.tilemap({ key: "map0" });
  var tileset = _map.addTilesetImage("Desert", "tileset");
  var layer = _map.createDynamicLayer("Ground", tileset, 0, 0); // layer index, tileset, x, y
  this.cameras.main.roundPixels = true;
  this.cameras.main.setBounds(0, 0, _map.widthInPixels, _map.heightInPixels);

  console.log("MAP SIZE (80*32): " + _map.heightInPixels);

  this.physics.world.setBounds(
    0,
    0,
    _map.widthInPixels,
    _map.heightInPixels - 20
  );

  // Locks pointer on mousedown [releases on Q,V,M,I(in their classes) or escape (by default) is pressed.]
  game.canvas.addEventListener("mousedown", function() {
    if (config.activeTool == "none") {
      game.input.mouse.requestPointerLock();
    }
  });
};
//END MAP1.create if
// UPDATE everything
Map1.update = function(time, delta) {
  //_controls.update(delta);
  _player.update();
  _reticle.update();
};
