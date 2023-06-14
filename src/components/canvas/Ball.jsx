import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <ambientLight intensity={0.25} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <directionalLight position={[0, 0, 0.1]}/>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <icosahedronGeometry args={[1, 1]} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} scale={1} position={[0, 0, 1]} rotation={[ 2*Math.PI, 0, 6.25 ]} />
      </mesh>
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({icon}) => {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enablePan={false} enableZoom={ false } />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
