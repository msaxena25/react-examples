import MyContext from './context';

import { useContext } from 'react';

const CompB = (props) => {
  const [contextData, setContextData] = useContext(MyContext);
  console.log('contextData :', contextData);

  const onClick = () => {
    setContextData({ ...contextData, email: 'jsmount@gmail.com', mobileNumber: 235345 });
    alert('data updated in context api');
  };

  const onRedirect = () => {
    props.history.push('/compA');
  };

  return (
    <>
      <h1>Example of use context</h1>
      <h4>This is Component B </h4>
      <h5> We set some data in context api from CompA and fetched in this component </h5>
      <h3>
        <div>
          Name & Id: {contextData.name} {contextData.id}
        </div>
        <div>
          Email & Phone:  {contextData.email} {contextData.mobileNumber}
        </div>
      </h3>
      <button onClick={onClick}>Set some more data into context api</button>
      <div>
        <button onClick={onRedirect}>Go to Comp A</button>
      </div>
    </>
  );
};

export default CompB;
