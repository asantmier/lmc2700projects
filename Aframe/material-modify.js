AFRAME.registerComponent('modify-materials', {
    // Define a schema so we can specify colors individually for each model
    schema: {
        frameColor: {default: 'white'},
        innerColor: {default: 'white'}
    },
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        this.startTime = new Date();
        this.wait = Math.random() * (10000 - 1) + 1;
        // Grab the mesh / scene.
        const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
        if (node.name.indexOf('Frame') !== -1) {
          node.material.color.set(this.data.frameColor);
        } else if (node.name.indexOf('InnerX') !== -1 || node.name.indexOf('InnerY') !== -1 || node.name.indexOf('InnerZ') !== -1) {
          node.material.color.set(this.data.innerColor);
        }
      });
    });
  },
  tick: function () {
    if (this.startTime) {
      let endTime = new Date();
      let timeDiff = endTime - this.startTime;
      if (timeDiff >= this.wait) {
        this.el.setAttribute("animation-mixer", "clip", "*")
        startTime = null
      }
    }
  }
});