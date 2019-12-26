var Preloader = new Phaser.Scene("Preloader");

// Use this file to preload-in all of our images
Preloader.preload = function() {
  config.currentScene = "Preloader";

  this.load.image(
    "tdtlogo",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Ftdtlogo.png?v=1577099651920"
  );
  this.load.image(
    "backpackicon",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Finventory.png?v=1577093905845"
  );
  this.load.image(
    "inventory",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Finventory.png?v=1577095903153"
  );
  this.load.image(
    "invclose",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Fbtncloseinv.png?v=1577105426983"
  );
  this.load.image(
    "mapicon",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Ficonmap.png?v=1577106435583"
  );
  this.load.image(
    "toolicon",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Ficontool.png?v=1577108236375"
  );
  this.load.image(
    "player",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Fplayer.png?v=1577177503097"
  );
  this.load.image(
    "tileset",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Ftiles_desert.png?v=1577029029114"
  );
  this.load.image(
    "reticle",
    "https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Freticule.png?v=1577208807722"
  );

  //
};
// executed once, after assets were loaded  https://cdn.glitch.com/d8d8f298-1643-4fe5-96bf-4eabd8e5b3ad%2Freticule.png?v=1577208807722
Preloader.create = function() {
  this.scene.start("Map1");
};
