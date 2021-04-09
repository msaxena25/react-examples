import React, { Component } from "react";
import ErrorBoundary from "../core/ErrorBoundary";

class TestErrorBoundaryComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }
  componentDidMount() {
    /**NOTE
     * Promise.resolve or Promise.reject : both call "then" method only
     * Code does not go into catch block in case of Promise.reject
     */

    //  const request = Promise.resolve("This is request success");
    //  const request = Promise.reject("This is request Error");
    const request = Promise.resolve("");
    request
      .then((response) => {
        if (response) {
          this.setState({ message: response });
        } else {
          throw new Error(response); // will open Error Boundary component
        }
      })
      .catch((error) => {
        this.setState({ message: error });
      });
  }
  render() {
    return (
      <ErrorBoundary>
        <h5>This is Class based Component to test error boundary</h5>
        <h4>{this.state.message}</h4>
      </ErrorBoundary>
    );
  }
}

export default TestErrorBoundaryComponent;
