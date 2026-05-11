import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center w-full h-full bg-primary text-white p-8 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Failed to load 3D Scene</h2>
            <p className="text-neutral-400 mb-4">
              The Spline scene could not be loaded. This usually happens if the scene is not exported as "Code" (React) or if the URL is incorrect.
            </p>
            <p className="text-sm text-neutral-500 font-mono bg-black/20 p-4 rounded-lg">
              {this.state.error?.message}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
