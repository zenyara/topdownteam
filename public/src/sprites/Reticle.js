class Reticle {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = config.centerX;
    this.y = config.centerY - 70;
    this.pic = "reticle";
    this.reticle;
    this.player;
    this.show();
  }

  addPlayer(player) {
    this.player = player;
  }

  update() {
    // Constrain position of reticle
    this.constrainReticle(this.player);
  }

  hide() {
    if (this.isLoaded) {
      console.log("remove reticle");
      reticle.destroy();
      this.bText.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      this.reticle = this.scene.physics.add
        .sprite(0, 0, "reticle")
        .setOrigin(0.5, 0.5)
        .setDisplaySize(32, 32)
        .setCollideWorldBounds(true);

      // Move reticle upon locked pointer move
      this.scene.input.on(
        "pointermove",
        function(pointer) {
          if (this.scene.input.mouse.locked) {
            this.reticle.x += pointer.movementX;
            this.reticle.y += pointer.movementY;
          }
        },
        this
      );
      game._pl();
      this.isLoaded = true;
    }
  }
  //

  constrainReticle(player) {
    // Makes reticle move with player
    this.reticle.body.velocity.x = player.body.velocity.x;
    this.reticle.body.velocity.y = player.body.velocity.y;
    //
    var distX = this.reticle.x - player.x; // X distance between player & reticle
    var distY = this.reticle.y - player.y; // Y distance between player & reticle

    // Ensures reticle cannot be moved offscreen (player follow)
    if (distX > config.centerX) this.reticle.x = player.x + config.centerX;
    else if (distX < -config.centerX)
      this.reticle.x = player.x - config.centerX;

    if (distY > config.centerY) this.reticle.y = player.y + config.centerY;
    else if (distY < -config.centerY)
      this.reticle.y = player.y - config.centerY;
  }
  // END constrainReticle()
}
// END Reticle CLASS
