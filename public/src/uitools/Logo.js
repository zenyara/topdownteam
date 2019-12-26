class Logo {
  constructor(scene) {
    this.scene = scene;
    this.isLoaded = false;
    this.x = 85;
    this.y = 73;
    this.pic = "tdtlogo";

    this.show();
  }

  hide() {
    if (this.isLoaded) {
      console.log("remove logo");
      this.logo.destroy();
      this.isLoaded = false;
    }
  }

  show() {
    if (!this.isLoaded) {
      this.logo = this.scene.add
        .image(this.x, this.y, this.pic)
        .setDepth(10)
        .setScale(0.7)
        .setScrollFactor(0);
      this.isLoaded = true;
    }
  }
}
// END Logo CLASS
