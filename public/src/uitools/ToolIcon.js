class ToolIcon {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = 45;
    this.y = config.height - 260;
    this.pic = "toolicon";
    this.show();
  }

  hide() {
    if (this.isLoaded) {
      this.ticon.destroy();
      this.tText.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      this.ticon = this.scene.add
        .image(this.x, this.y, this.pic)
        .setDepth(10)
        .setInteractive({ cursor: "pointer" });

      this.ticon.on(
        "pointerdown",
        function(event) {
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
        },
        this
      );

      this.tText = this.scene.make.text(
        {
          x: 25,
          y: this.y - 38,
          text: "Tools (v)",
          style: {
            font: "12px monospace",
            fill: "#fff"
          }
        },
        this
      );
      this.tText.setOrigin(0, 0).setDepth(11);

      this.isLoaded = true;
    }
  }
}
// END ToolIcon CLASS
