import { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Spaceship = ({ isMobile }) => {
  const computer = useGLTF('./arwing_starfighter/scene.gltf')

  return (
    <mesh>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <hemisphereLight intensity={0.1} groundColor="black" />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <pointLight intensity={0.25} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <spotLight position={[10, 20, 10]} angle={0.25} intensity={1} castShadow shadow-mapSize={1024} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <primitive object={computer.scene} scale={isMobile ? 0.35 : 0.65} position={isMobile ? [0, -2.75, 0.25] : [-1.5, -2.25, 0]} rotation={[0.25, 0.5, -0.25]} />
    </mesh>
  )
}

const SpaceshipCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 750px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 35 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={ false } enablePan={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Spaceship isMobile={isMobile} />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

Spaceship.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default SpaceshipCanvas;
