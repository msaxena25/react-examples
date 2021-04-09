import React, { useEffect } from "react";
import axios from "axios";

/* HOC STRUCTURE CLASS BASED COMPONENT AND FUNCTIONAL COMPONENTS

******** RETURN CLASS BASED COMPONENT

import React from "react";
// Take in a component as argument WrappedComponent
const higherOrderComponent = (WrappedComponent) => {
  // And return another component
  class HOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};

***** RETURN FUNCTIONAL COMPONENT

// Take in a component as argument WrappedComponent
const higherOrderComponent = (WrappedComponent) => {
  // And return another component
  hoc = (props) => {
    return <WrappedComponent {...props} />;
  };
  return HOC;
};

*/

const HttpHandler = (Wrapped) => {
  const Hoc = (props) => {
    useEffect(() => {
      axios.interceptors.request.use(
        (request) => {
          console.log("Request released");
          // request.headers["Content-Type"] = "mohit";
          //  request.headers["Authorize-token"] = "myrequesttoken";

          return request;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      axios.interceptors.response.use(
        function (response) {
          // Do something with response data
          return response;
        },
        function (error) {
          console.log(error);
          switch (error && error.response && error.response.status) {
            case 503:
              props.history.push("/503"); //we will redirect user into 503 page
              break;
            default:
              break;
          }
          // Do something with response error
          return Promise.reject(error);
        }
      );
    });

    return <Wrapped {...props} />;
  };
  return Hoc;
};

export default HttpHandler;

/**
 * USE:
 *
 *
 * export default HttpHandler(AsyncAutoComplete);
 */
