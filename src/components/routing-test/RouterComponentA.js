import React, { useState } from "react";
import { Button } from "reactstrap";

const RouterComponentA = (props) => {
  /**
   * Router Navigation is done using props.history
   * See RouterComponentB for other way to route using hook
   */
  const onClick = () => {
    props.history.push("/routerB");
  };

  const checkActivate = () => {};

  return (
    <>
      <h1>Welcome to Router Component A</h1>
      <Button onClick={onClick}>Route to B</Button>
      <Button style={{ marginLeft: "10px" }} onClick={checkActivate}>
        Route to B Check activate
      </Button>
    </>
  );
};

export default RouterComponentA;
