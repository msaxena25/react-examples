import MyContext from './context';

import { useContext, useEffect } from 'react';

const CompA = (props) => {
  const [contextData, setContextData] = useContext(MyContext);

  useEffect(() => {
    setTimeout(() => {
      setContextData({ ...contextData, name: 'JSMount', id: '12345', code: 'JS12' });
    }, 1000);
  }, []);

  const onClick = () => {
    props.history.push('/compB');
  };
  return (
    <>
      <h1>Example of use context</h1>

      <div>
        <p>* Added Context API Provider to the root level component and that is App.js</p>
        <p> * Created a variable named contextData and a method setContextData with using useState</p>
        <p>* In any component, if we need to set data into contextAPI, we will call setContextData with our values</p>
        <p> * In any component , if we have to fetch data from contextAPI we will fetch from contextData variable.</p>
        <p>
          {' '}
          * To get these in other component, use useContext hook and write like - * const [contextData, setContextData] =
          useContext(MyContext);
        </p>
      </div>
      <h4>This is Component A </h4>
      <h3>
        <div>
          Name & Id: {contextData.name} {contextData.id}
        </div>
        <div>
          Email & Phone: {contextData.email} {contextData.mobileNumber}
        </div>
      </h3>
      <button onClick={onClick}>Go to Comp B</button>
    </>
  );
};

export default CompA;
