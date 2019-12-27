class BackpackUI {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = config.centerX;
    this.y = config.centerY;
    this.cx = 801;
    this.cy = 129;
    this.xx = 824; // img "x close btn"
    this.xy = 128;
    this.pic = "inventory";
    this.picX = "invclose";

    this.scene.input.keyboard.on(
      "keydown_I",
      function(event) {
        if (game.input.mouse.locked) game.input.mouse.releasePointerLock();
      },
      0,
      this
    );

    this.scene.input.keyboard.on(
      "keyup",
      function(event) {
        // close inventory with "ESC" key
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.ESC) {
          this.hide();
          config.activeTool = "none";
        }
        // toggle inventory with "i" key
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.I) {
          let _present = "bag";
          switch (config.activeTool) {
            case "none":
              this.scene.backpackui.show();
              config.activeTool = _present;
              break;
            case _present:
              this.scene.backpackui.hide();
              config.activeTool = "none";
              break;
            case "map":
              this.scene.mapui.hide();
              this.scene.backpackui.show();
              config.activeTool = _present;
              break;
            case "tools":
              this.scene.toolui.hide();
              this.scene.backpackui.show();
              config.activeTool = _present;
              break;
          }
        }
      },
      this
    );

    //
  }

  hide() {
    if (this.isLoaded) {
      this.img.destroy();
      this.imgX.destroy();
      this.iText.destroy();
      //this.cText.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      this.img = this.scene.add
        .image(this.x, this.y, this.pic)
        .setDepth(110)
        .setScrollFactor(0);
      this.imgX = this.scene.add
        .image(this.xx, this.xy, this.picX)
        .setInteractive({ cursor: "pointer" })
        .setDepth(111)
        .setScrollFactor(0);

      this.imgX.on(
        "pointerup",
        function(event) {
          this.hide();
          config.activeTool = "none";
        },
        this
      );

      // "Inventory" text
      this.iText = this.scene.make.text(
        {
          x: this.x - 30,
          y: 66,
          text: "Backpack",
          style: {
            font: "15px monospace",
            fill: "#fff"
          }
        },
        this
      );
      this.iText.setDepth(11).setScrollFactor(0);

      config.activeTool = "bag";
      this.isLoaded = true;
    }
  }
}
// END BackpackUI CLASS
