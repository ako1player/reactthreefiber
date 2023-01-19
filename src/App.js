import './App.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import * as THREE from 'three';

const Box = () =>{
  const [ref, api] = useBox(()=>({mass: 1, position: [0,0,0]}));
  const img = useLoader(THREE.TextureLoader, '../image/snapchatpic.jpg' )
  return(
    <mesh
    onClick={() =>{api.velocity.set(1,2,1);
    }} 
    ref={ref} 
    position={[0,2,0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="lightblue" map={img}/>
    </mesh>
  )
}

const Plane = () =>{
  const [ref] = usePlane(()=>({rotation: [-Math.PI /2 , 0 , 0],}));
  return(
    <mesh ref={ref} rotation={[-Math.PI/2 ,0,0]}>
      <planeBufferGeometry attach="geometry" args={[100,100]}/>
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
     <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10,15,10]}
        angle={0.3}
      />
      <Physics>
        <Box />
        <Plane />
      </Physics>
     </Canvas>
    </div>
  );
}

export default App;
