import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Helper from "./../../util/Helper";
import { addTwoNumber, getUserName } from "./../../util/util";

const RouterComponentA = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    Helper.getPromiseData().then((res) => {
      setUser(res);
    });
    const params = props.match;
    console.table(params);
  }, [props.match]);
  /**
   * Router Navigation is done using props.history
   * See RouterComponentB for other way to route using hook
   */
  const onClick = () => {
    props.history.push("/routerB");
  };

  return (
    <>
      <h3>Welcome to Router Component A</h3>
      <h6>Called util function: Username is {getUserName()}</h6>
      <h6>Sum of two number (3,4) using util.js - {addTwoNumber(3, 4)}</h6>
      <h6>Sum of two number (8,4) using Helper.js - {Helper.printSum(8, 4)}</h6>
      <h6>
        Multiply of two number (8,4) using Helper.js - {Helper.multiply(8, 4)}
      </h6>
      <h6>Below data is coming through Promise Resolve from Helper class</h6>
      <p>User: {user.name}</p>
      <p>Id: {user.id}</p>
      <Button onClick={onClick}>Route to B</Button>
    </>
  );
};

export default RouterComponentA;
