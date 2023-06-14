import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Satellite = () => {
  const satellite = useGLTF("./simple_satellite/scene.gltf");

  return (
    <>
      <ambientLight intensity={0.25} />
      <spotLight position={[0, 20, 20]} angle={Math.PI / 4} intensity={1} />
      <primitive object={satellite.scene} scale={0.35} position={[0, 1, 0]} rotation={[0, -6.5, 5]} />
    </>
  );
};

const SatelliteCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        position: [-6, 3, 6],
      }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Satellite />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SatelliteCanvas;
