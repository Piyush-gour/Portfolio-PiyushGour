import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// The inner rotating points cloud
const StarCloud = (props) => {
    const ref = useRef();

    // Generate 5000 random points within a sphere of radius 1.5
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        // Slowly rotate the entire cloud
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00d8a1" // Teal brand color
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-[-10] w-full h-full bg-[#030614] overflow-hidden hidden dark:block">
            {/* Fallback dark background is handled by the div class bg-[#030614] */}

            {/* Soft glowing ambient light center orb behind the canvas */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d8a1]/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

            <Canvas
                camera={{ position: [0, 0, 1] }}
                className="w-full h-full pointer-events-none"
            >
                <StarCloud />
            </Canvas>
        </div>
    );
};

export default Background3D;
