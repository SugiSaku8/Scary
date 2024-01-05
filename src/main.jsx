import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import './ui.css'

function Scene() {
 const fbx = useLoader(FBXLoader, '/path/to/your/model.fbx');

 useFrame((state, delta) => {
 if (state.keys.includes('KeyW')) {
   // 前進
   fbx.position.z -= 1 * delta;
 }
 if (state.keys.includes('KeyS')) {
   // 後進
   fbx.position.z += 1 * delta;
 }
 if (state.keys.includes('KeyA')) {
   // 左に移動
   fbx.rotation.y -= Math.PI / 90 * delta;
 }
 if (state.keys.includes('KeyD')) {
   // 右に移動
   fbx.rotation.y += Math.PI / 90 * delta;
 }
 });

 return <primitive object={fbx} />;
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
