import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const TRACK_LENGTH = 300;
const WAYPOINTS_COUNT = 6;

function CameraRig() {
  const rigRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!rigRef.current) return;

    // Read scroll directly for zero-lag synchronization
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;
    
    const targetZ = -(progress * TRACK_LENGTH);
    const currentZ = rigRef.current.position.z;

    // Smoothly interpolate rig position
    rigRef.current.position.z = THREE.MathUtils.lerp(currentZ, targetZ, 0.1);

    // Calculate actual speed this frame to add slight camera movement
    const speed = currentZ - rigRef.current.position.z; 
    
    // First-person camera view
    const cameraTargetX = 0;
    // Lower the camera slightly to feel closer to the road (driver's seat height)
    const cameraTargetY = 1.2 + Math.min(Math.abs(speed) * 0.01, 0.1); 
    
    // Lock camera Z to rig Z to prevent rubber-banding on fast scroll
    const cameraTargetZ = rigRef.current.position.z;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, cameraTargetX, 0.1);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, cameraTargetY, 0.1);
    state.camera.position.z = cameraTargetZ; // Rigid follow on Z axis

    // Look slightly ahead down the road
    const lookAtTarget = new THREE.Vector3(
      0,
      1.2,
      rigRef.current.position.z - 20
    );
    state.camera.lookAt(lookAtTarget);
  });

  return (
    <group ref={rigRef}>
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={0.5} 
        color="#ffffff" 
        castShadow 
        shadow-mapSize={[1024, 1024]} 
      />
    </group>
  );
}

function RealisticEnvironment() {
  // Checkpoints (Realistic Arches)
  const checkpoints = useMemo(() => {
    return Array.from({ length: WAYPOINTS_COUNT }).map((_, i) => {
      // Offset z so it doesn't start at 0 or end exactly at TRACK_LENGTH
      const z = -((i + 1) / (WAYPOINTS_COUNT + 1)) * TRACK_LENGTH;
      const neonColor = i % 2 === 0 ? "#00ffcc" : "#4a90e2";
      return (
        <group key={`checkpoint-${i}`} position={[0, 0, z]}>
          {/* Left Pillar */}
          <mesh position={[-5, 3, 0]} castShadow receiveShadow>
            <boxGeometry args={[1, 6, 1]} />
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Right Pillar */}
          <mesh position={[5, 3, 0]} castShadow receiveShadow>
            <boxGeometry args={[1, 6, 1]} />
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Top Beam */}
          <mesh position={[0, 6.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[11, 1, 1]} />
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Neon Accents */}
          <mesh position={[0, 6.5, 0.51]}>
            <boxGeometry args={[11, 0.2, 0.01]} />
            <meshBasicMaterial color={neonColor} />
          </mesh>
          <mesh position={[-4.51, 3, 0]}>
            <boxGeometry args={[0.01, 6, 0.2]} />
            <meshBasicMaterial color={neonColor} />
          </mesh>
          <mesh position={[4.51, 3, 0]}>
            <boxGeometry args={[0.01, 6, 0.2]} />
            <meshBasicMaterial color={neonColor} />
          </mesh>
          <pointLight position={[0, 6, 0]} color={neonColor} intensity={2} distance={20} />
        </group>
      );
    });
  }, []);

  // Dashed center line
  const dashedLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i < TRACK_LENGTH / 4; i++) {
      lines.push(
        <mesh key={`dash-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -i * 4 + 10]} receiveShadow>
          <planeGeometry args={[0.15, 2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      );
    }
    return lines;
  }, []);

  // Streetlights
  const streetLights = useMemo(() => {
    const lights = [];
    for (let i = 0; i < TRACK_LENGTH / 20; i++) {
      const z = -i * 20 + 10;
      lights.push(
        <group key={`light-${i}`} position={[-6, 0, z]}>
          {/* Pole */}
          <mesh position={[0, 4, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.1, 0.1, 8, 8]} />
            <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Arm */}
          <mesh position={[1.5, 8, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
            <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Light Bulb */}
          <mesh position={[2.8, 7.9, 0]}>
            <boxGeometry args={[0.4, 0.1, 0.2]} />
            <meshBasicMaterial color="#ffeedd" />
          </mesh>
          <pointLight position={[2.8, 7.5, 0]} color="#ffeedd" intensity={1.5} distance={30} castShadow />
        </group>
      );
      lights.push(
        <group key={`light-r-${i}`} position={[6, 0, z]}>
          {/* Pole */}
          <mesh position={[0, 4, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.1, 0.1, 8, 8]} />
            <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Arm */}
          <mesh position={[-1.5, 8, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
            <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Light Bulb */}
          <mesh position={[-2.8, 7.9, 0]}>
            <boxGeometry args={[0.4, 0.1, 0.2]} />
            <meshBasicMaterial color="#ffeedd" />
          </mesh>
          <pointLight position={[-2.8, 7.5, 0]} color="#ffeedd" intensity={1.5} distance={30} castShadow />
        </group>
      );
    }
    return lights;
  }, []);

  return (
    <group>
      {/* Main Road - Made slightly lighter so it's clearly visible */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -TRACK_LENGTH / 2 + 10]} receiveShadow>
        <planeGeometry args={[12, TRACK_LENGTH + 40]} />
        <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
      </mesh>
      
      {/* Side lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-4.5, 0.01, -TRACK_LENGTH / 2 + 10]} receiveShadow>
        <planeGeometry args={[0.1, TRACK_LENGTH + 40]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[4.5, 0.01, -TRACK_LENGTH / 2 + 10]} receiveShadow>
        <planeGeometry args={[0.1, TRACK_LENGTH + 40]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {dashedLines}
      {streetLights}
      {checkpoints}

      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, -TRACK_LENGTH / 2 + 10]} receiveShadow>
        <planeGeometry args={[200, TRACK_LENGTH + 100]} />
        <meshStandardMaterial color="#050505" roughness={1} />
      </mesh>
    </group>
  );
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020202]">
      <Canvas shadows camera={{ position: [0, 3, 8], fov: 60 }}>
        <fog attach="fog" args={['#020202', 15, 80]} />
        <ambientLight intensity={0.6} />
        <hemisphereLight skyColor="#ffffff" groundColor="#000000" intensity={0.4} />
        
        <Environment preset="night" />
        
        <CameraRig />
        <RealisticEnvironment />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
