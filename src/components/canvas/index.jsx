import { Component, lazy, Suspense } from "react";

// A 3D scene that fails (WebGL off, an icon that will not load) must not take the page down.
class CanvasErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

// Three.js is heavy, so each canvas loads in its own chunk after the page shows.
const lazyCanvas = (load) => {
  const Canvas = lazy(load);
  const LazyCanvas = (props) => (
    <CanvasErrorBoundary>
      <Suspense fallback={null}>
        <Canvas {...props} />
      </Suspense>
    </CanvasErrorBoundary>
  );
  return LazyCanvas;
};

export const EarthCanvas = lazyCanvas(() => import("./Earth"));
export const BallCanvas = lazyCanvas(() => import("./Ball"));
export const ComputersCanvas = lazyCanvas(() => import("./Computers"));
export const StarsCanvas = lazyCanvas(() => import("./Stars"));
