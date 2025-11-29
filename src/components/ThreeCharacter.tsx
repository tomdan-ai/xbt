import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { Float, PerspectiveCamera } from '@react-three/drei';

function CharacterMesh() {
    const meshRef = useRef<Mesh>(null);
    const texture = useLoader(TextureLoader, '/xbt2.jpg');
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

            // Vibrate on hover
            if (hovered) {
                meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 50) * 0.05;
            } else {
                meshRef.current.position.x = 0;
            }
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={[5, 5, 5]}
            >
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial map={texture} transparent />
            </mesh>
        </Float>
    );
}

export default function ThreeCharacter({ className = '' }: { className?: string }) {
    return (
        <div className={`${className} h-[500px] w-full`}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={1} />
                <CharacterMesh />
            </Canvas>
        </div>
    );
}
