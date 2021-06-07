import { useState } from 'react';
import Routing from './components/Routing';
import MyContext from './components/UseContext-example/context';

/**
 * Added Context API Provider to the root level component and that is App.js
 * Created a variable named contextData and a method setContextData with using useState
 * In any component, if we need to set data into contextAPI, we will call setContextData with our values
 * In any component , if we have to fetch data from contextAPI we will fetch from contextData variable.
 * To get these in other component, use useContext hook and write like -
 * const [contextData, setContextData] = useContext(MyContext);
 */

function App() {
  const [contextData, setContextData] = useState({});
  return (
    <MyContext.Provider value={[contextData, setContextData]}>
      <Routing></Routing>
    </MyContext.Provider>
  );
}

export default App;
