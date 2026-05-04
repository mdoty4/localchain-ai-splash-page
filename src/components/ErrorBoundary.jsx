import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('[ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="text-center px-6 max-w-md">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-amber-400 mb-2">Seq</h1>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Something went wrong</h2>
            <p className="text-slate-400 mb-8">
              An unexpected error occurred. You can try reloading the page to recover.
            </p>
            <button
              onClick={this.handleReload}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              Reload Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left text-sm text-slate-500 bg-slate-800 rounded-lg p-4 overflow-auto">
                <summary className="cursor-pointer font-medium text-slate-400">Error Details</summary>
                <pre className="mt-2 whitespace-pre-wrap text-red-400">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="mt-2 whitespace-pre-wrap text-amber-300">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;