'use client'

import React, { Component, ErrorInfo, ReactNode, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("SplineScene WebGL/Load Crash:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Delay mounting the Spline canvas slightly to prevent React 18 Strict Mode double-render crashes
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary fallback={<div className="spline-error-fallback" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>3D Scene Unavailable</div>}>
      {shouldRender ? (
        <Spline
          scene={scene}
          className={className}
        />
      ) : (
        <div className="spline-scene-loader-container">
          <span className="loader"></span>
        </div>
      )}
    </ErrorBoundary>
  );
}

export default SplineScene;
