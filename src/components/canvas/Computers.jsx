import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", undefined, (loader) => {
    const dracoLoader = new DRACOLoader();
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile}
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.75} // Adjust scale for small screens
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]} // Adjust position for small screens
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); // Set isMobile based on screen width
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup event listener when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 30 : 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Only render the ComputerModel when it's not a mobile screen */}
        {!isMobile && <MemoizedComputerModel isMobile={isMobile} />}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
