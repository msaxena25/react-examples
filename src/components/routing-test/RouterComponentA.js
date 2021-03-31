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
 

  return (
    <>
      <h1>Welcome to Router Component A</h1>
      <Button onClick={onClick}>Route to B</Button>
     
    </>
  );
};

export default RouterComponentA;
