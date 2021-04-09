//import RouterComponentA from "./routing-test/RouterComponentA";
//import RouterComponentB from "./routing-test/RouterComponentB";

import React, { Suspense, useState } from "react";

const RouterComponentA = React.lazy(() =>
  import("./routing-test/RouterComponentA")
);

const RouterComponentB = React.lazy(() =>
  import("./routing-test/RouterComponentB")
);

const LazyloadComponent = () => {
  const [load, setLoad] = useState(false);
  //alert("We will load components as  Lazyload Component ");
  const onLoad = () => {
    setLoad(true);
  };
  return (
    <>
      <button onClick={onLoad}>Load Components</button>
      {load && (
        <Suspense fallback={<div>Loading...</div>}>
          <RouterComponentA></RouterComponentA>
          <RouterComponentB></RouterComponentB>
        </Suspense>
      )}
    </>
  );
};

export default LazyloadComponent;
