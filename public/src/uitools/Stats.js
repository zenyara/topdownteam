class GameVersion {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = 10;
    this.y = config.height - 25;
    this.show();
  }

  hide() {
    if (this.isLoaded) {
      console.log("remove version");
      this.versionText.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      this.versionText = this.scene.make.text(
        {
          x: this.x,
          y: this.y,
          text: "[Game Ver. " + config.version + "]",
          style: {
            font: "12px monospace",
            fill: "#cc9900"
          }
        },
        this
      );
      this.versionText
        .setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000)
        .setOrigin(0, 0)
        .setDepth(50)
        .setScrollFactor(0);
      this.isLoaded = true;
    }
  }
}
// END GameVersion CLASS
