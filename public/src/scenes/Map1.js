var Map1 = new Phaser.Scene("Map1");

(Map1.preload = function() {
  "use strict";
  config.currentScene = "Map1";
}),
  // executed once, after assets were loaded
  (Map1.create = function() {
    "use strict";
    new Logo(this);
    new GameVersion(this);
    this.backpackicon = new BackpackIcon(this);
    this.backpackui = new BackpackUI(this);
    this.mapicon = new MapIcon(this);
    this.mapui = new MapUI(this);
    this.toolicon = new ToolIcon(this);
    this.toolui = new ToolUI(this);
  });
