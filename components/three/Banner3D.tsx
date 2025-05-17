'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Canvas = dynamic(() => import('@react-three/fiber').then(m => m.Canvas), { ssr: false });
const ShaderPlane = dynamic(() => import('./ShaderPlane'), { ssr: false });

export default function Banner3D() {
  return (
    <div className="h-[60vh] w-full">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 1.4, 2.5], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <ShaderPlane />
        </Canvas>
      </Suspense>
    </div>
  );
}