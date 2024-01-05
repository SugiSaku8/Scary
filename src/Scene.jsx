const { ModelLoader } = require('@watson-virtual-agent/waas');
const { Scene, Entity } = require('@watson-virtual-agent/waas');

const loader = new ModelLoader();
loader.load('path/to/your/model.gltf').then((model) => {
     console.log("Model Loaded!")
});

const scene = new Scene();
const entity = new Entity();
entity.addComponent(model);
scene.addEntity(entity);

process.stdin.on('keypress', (str, key) => {
  if (key && key.name === 'w') {
      // Go
      transform.position.z -= 1;
  } else if (key && key.name === 's') {
      // back
      transform.position.z += 1;
  } else if (key && key.name === 'a') {
      // right
      transform.rotation.y += Math.PI / 90; 
  } else if (key && key.name === 'd') {
      // left
      transform.rotation.y -= Math.PI / 90;
  }
});
