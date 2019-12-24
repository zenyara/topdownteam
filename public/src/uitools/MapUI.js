class MapUI {
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
      "keyup",
      function(event) {
        // close map with "ESC" key
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.ESC) {
          this.hide();
          config.activeTool = "none";
        }
        // toggle map with "m" key
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.M) {
          let _present = "map";
          switch (config.activeTool) {
            case "none":
              this.scene.mapui.show();
              config.activeTool = _present;
              break;
            case _present:
              this.scene.mapui.hide();
              config.activeTool = "none";
              break;
            case "tools":
              this.scene.toolui.hide();
              this.scene.mapui.show();
              config.activeTool = _present;
              break;
            case "bag":
              this.scene.backpackui.hide();
              this.scene.mapui.show();
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
      this.img = this.scene.add.image(this.x, this.y, this.pic).setDepth(10);
      this.imgX = this.scene.add
        .image(this.xx, this.xy, this.picX)
        .setInteractive({ cursor: "pointer" })
        .setDepth(10);

      this.imgX.on(
        "pointerdown",
        function(event) {
          this.hide();
          config.activeTool = "none";
        },
        this
      );

      // "Map" text
      this.iText = this.scene.make.text(
        {
          x: this.x - 35,
          y: 66,
          text: "World Map",
          style: {
            font: "15px monospace",
            fill: "#fff"
          }
        },
        this
      );
      this.iText.setDepth(11);

      // "Close" text
      /*
      this.cText = this.scene.make.text(
        {
          x: this.cx,
          y: this.cy,
          text: "close",
          style: {
            font: "11px monospace",
            fill: "#fff"
          }
        },
        this
      );
      this.cText.setDepth(11);*/

      config.activeTool = "map";
      this.isLoaded = true;
    }
  }
}
// END MapUI CLASS
