class BackpackIcon {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = 45;
    this.y = config.height - 63;
    this.pic = "backpackicon";
    this.show();
  }

  hide() {
    if (this.isLoaded) {
      console.log("remove backpack");
      this.bag.destroy();
      this.bText.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      this.bag = this.scene.add
        .image(this.x, this.y, this.pic)
        .setDepth(10)
        .setInteractive({ cursor: "pointer" });

      this.bag.on(
        "pointerdown",
        function(event) {
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
        },
        this
      );

      this.bText = this.scene.make.text(
        {
          x: 17,
          y: this.y - 38,
          text: "Backpack (i)",
          style: {
            font: "12px monospace",
            fill: "#fff"
          }
        },
        this
      );
      this.bText.setOrigin(0, 0).setDepth(11);

      this.isLoaded = true;
    }
  }
}
// END BackpackIcon CLASS
