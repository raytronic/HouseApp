import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'; // For camera controls


function Cube() {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} /> {/* Width, height, depth */}
        <meshStandardMaterial color="orange" /> {/* Material color */}
      </mesh>
    );
  }
  

function Machine() {


  return (
    <div>

   <Canvas
      camera={{
        position: [5, 5, 5], // Camera position (x, y, z)
        fov: 75, // Field of view
        near: 0.1, // Near clipping plane
        far: 100, // Far clipping plane
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} /> {/* Soft overall light */}
      <pointLight position={[10, 10, 10]} /> {/* Bright light from a point */}

      {/* Camera Controls (optional) */}
      <OrbitControls />

      {/* The Cube */}
      <Cube />
    </Canvas>
    </div>
    
    
  )


 
}

export default Machine