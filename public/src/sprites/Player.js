class Player {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = config.centerX;
    this.y = config.centerY;
    this.pic = "player";
    this.player;
    this.reticle;
    this.speed = 200;
    this.show();
  }

  addReticle(reticle) {
    this.reticle = reticle;
  }

  update() {
    var sprite = this.player;
    sprite.rotation = Phaser.Math.Angle.Between(
      sprite.x,
      sprite.y,
      this.reticle.x,
      this.reticle.y
    );
    // Constrain velocity of player
    this.constrainVelocity(this.speed);
  }
  // END update()

  hide() {
    if (this.isLoaded) {
      console.log("remove player");
      this.player.destroy();
      this.bText.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      //game._xxx(); WE CAN CALL game.function() from any class!

      this.player = this.scene.physics.add
        .sprite(config.centerX, config.centerY, this.pic)
        .setOrigin(0.5, 0.5)
        //.setDisplaySize(132, 120)
        .setCollideWorldBounds(true)
        .setDrag(500, 500)
        .setDepth(77);

      this.scene.cameras.main.startFollow(this.player);

      var sprite = this.player;

      // Creates object for input with WASD kets
      var moveKeys = this.scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
      });
      // Enables movement of player with WASD keys
      this.scene.input.keyboard.on("keydown_W", function(event) {
        sprite.setAccelerationY(-800);
      });
      this.scene.input.keyboard.on("keydown_S", function(event) {
        sprite.setAccelerationY(800);
      });
      this.scene.input.keyboard.on("keydown_A", function(event) {
        sprite.setAccelerationX(-800);
      });
      this.scene.input.keyboard.on("keydown_D", function(event) {
        sprite.setAccelerationX(800);
      });

      // Stops player acceleration on uppress of WASD keys
      this.scene.input.keyboard.on("keyup_W", function(event) {
        if (moveKeys["down"].isUp) sprite.setAccelerationY(0);
      });
      this.scene.input.keyboard.on("keyup_S", function(event) {
        if (moveKeys["up"].isUp) sprite.setAccelerationY(0);
      });
      this.scene.input.keyboard.on("keyup_A", function(event) {
        if (moveKeys["right"].isUp) sprite.setAccelerationX(0);
      });
      this.scene.input.keyboard.on("keyup_D", function(event) {
        if (moveKeys["left"].isUp) sprite.setAccelerationX(0);
      });

      this.isLoaded = true;
    }
  }
  //
  // Ensures sprite speed doesnt exceed maxVelocity while update is called
  constrainVelocity(maxVelocity) {
    var sprite = this.player;
    if (!sprite || !sprite.body) return;

    var angle, currVelocitySqr, vx, vy;
    vx = sprite.body.velocity.x;
    vy = sprite.body.velocity.y;
    currVelocitySqr = vx * vx + vy * vy;

    if (currVelocitySqr > maxVelocity * maxVelocity) {
      angle = Math.atan2(vy, vx);
      vx = Math.cos(angle) * maxVelocity;
      vy = Math.sin(angle) * maxVelocity;
      sprite.body.velocity.x = vx;
      sprite.body.velocity.y = vy;
    }
  }
  //END constrainVelocity()
}
// END Player CLASS
