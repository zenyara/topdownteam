class ToolUI {
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
      "keydown_V",
      function(event) {
        if (game.input.mouse.locked) game.input.mouse.releasePointerLock();
      },
      0,
      this
    );

    this.scene.input.keyboard.on(
      "keyup",
      function(event) {
        // close map with "ESC" key
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.ESC) {
          this.hide();
          config.activeTool = "none";
        }
        // toggle tools with "v" key
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.V) {
          let _present = "tools";
          switch (config.activeTool) {
            case "none":
              this.scene.toolui.show();
              config.activeTool = _present;
              break;
            case _present:
              this.scene.toolui.hide();
              config.activeTool = "none";
              break;
            case "map":
              this.scene.mapui.hide();
              this.scene.toolui.show();
              config.activeTool = _present;
              break;
            case "bag":
              this.scene.backpackui.hide();
              this.scene.toolui.show();
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

      // "Tools" text
      this.iText = this.scene.make.text(
        {
          x: this.x - 22,
          y: 66,
          text: "Tools",
          style: {
            font: "15px monospace",
            fill: "#fff"
          }
        },
        this
      );
      this.iText.setDepth(111).setScrollFactor(0);

      this.isLoaded = true;
    }
  }
}
// END MapUI CLASS
