import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing R3F JSX type definitions
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      fog: any;
      ambientLight: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      fog: any;
      ambientLight: any;
    }
  }
}

const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  // Generate random points for the particle cloud
  const particles = useMemo(() => {
    const count = 400; // Increased count
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const r = 1.2 + Math.random() * 0.8; // Radius variation
      
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Smooth mouse interaction
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05 + x * 0.05;
      pointsRef.current.rotation.x = t * 0.02 + y * 0.05;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.08 + x * 0.02;
      sphereRef.current.rotation.x = t * 0.04 - y * 0.02;
      
      // Breathing effect
      const scale = 1 + Math.sin(t * 0.5) * 0.05;
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group scale={2.2}>
      {/* Wireframe Globe representing the network structure */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere args={[1.5, 32, 32]} ref={sphereRef}>
          <meshBasicMaterial
            color="#3f37c9" /* Neon Deep Indigo */
            wireframe
            transparent
            opacity={0.08}
          />
        </Sphere>
        
        {/* Floating Data Points */}
        <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#4cc9f0" /* Neon Sky Blue */
            size={0.025}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
        
        {/* Inner core glow */}
        <mesh>
             <sphereGeometry args={[0.9, 32, 32]} />
             <meshBasicMaterial color="#4361ee" /* Neon Royal Blue */ transparent opacity={0.03} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
    </group>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <fog attach="fog" args={['#050505', 5, 15]} />
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
};

export default Scene3D;