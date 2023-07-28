import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // this lifecycle method will be triggered whenever one of the child components throws an error
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  // wrap error boundary component around components which should be protected
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
