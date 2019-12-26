class MapIcon {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = 45;
    this.y = config.height - 164;
    this.pic = "mapicon";
    this.show();
  }

  hide() {
    if (this.isLoaded) {
      this.micon.destroy();
      this.mText.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      this.micon = this.scene.add
        .image(this.x, this.y, this.pic)
        .setDepth(50)
        .setScrollFactor(0)
        .setInteractive({ cursor: "pointer" });

      this.micon.on(
        "pointerdown",
        function(event) {
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
            case "bag":
              this.scene.backpackui.hide();
              this.scene.mapui.show();
              config.activeTool = _present;
              break;
            case "tools":
              this.scene.toolui.hide();
              this.scene.mapui.show();
              config.activeTool = _present;
              break;
          }
        },
        this
      );

      this.mText = this.scene.make.text(
        {
          x: 25,
          y: this.y - 38,
          text: "Map (m)",
          style: {
            font: "12px monospace",
            fill: "#fff"
          }
        },
        this
      );
      this.mText
        .setOrigin(0, 0)
        .setDepth(11)
        .setScrollFactor(0);

      this.isLoaded = true;
    }
  }
}
// END MapIcon CLASS
