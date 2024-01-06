import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Scene() {
 const obj = useLoader(OBJLoader, '/data/model/hotel.obj');

 useFrame((state, delta) => {
  if (state.keys.includes('KeyW')) {
    // 前進
    obj.position.z -= 1 * delta;
  }
  if (state.keys.includes('KeyS')) {
    // 後進
    obj.position.z += 1 * delta;
  }
  if (state.keys.includes('KeyA')) {
    // 左に移動
    obj.rotation.y -= Math.PI / 90 * delta;
  }
  if (state.keys.includes('KeyD')) {
    // 右に移動
    obj.rotation.y += Math.PI / 90 * delta;
  }
 });

 return <primitive object={obj} />;
}

function App() {
 return (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Scene />
    <OrbitControls />
  </Canvas>
 );
}

export default App;
