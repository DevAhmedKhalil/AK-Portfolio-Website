import React, { lazy, Suspense } from "react";

// Three.js is heavy, so each canvas loads in its own chunk after the page shows.
const lazyCanvas = (load) => {
  const Canvas = lazy(load);
  const LazyCanvas = (props) => (
    <Suspense fallback={null}>
      <Canvas {...props} />
    </Suspense>
  );
  return LazyCanvas;
};

export const EarthCanvas = lazyCanvas(() => import("./Earth"));
export const BallCanvas = lazyCanvas(() => import("./Ball"));
export const ComputersCanvas = lazyCanvas(() => import("./Computers"));
export const StarsCanvas = lazyCanvas(() => import("./Stars"));
