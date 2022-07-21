import {React, useState} from 'react';
import { Button } from 'reactstrap';

// hoc example
const withToggle = (WrappedComponent) => {
  function WithToggle(props) {
    const [isEdit, setIsEdit] = useState(true);
    const onToggle = () => {
        setIsEdit(!isEdit);
      };
     const newProps = {...props, isEdit};
    return (
      <div>
        <Button color='primary' onClick={onToggle}>
          {' '}
          {!isEdit ? 'Edit' : 'View'}
        </Button>{' '}
        <WrappedComponent {...newProps}></WrappedComponent>
        <h4>This is example of Higher Order Component</h4>
      </div>
    );
  }
  return WithToggle;
};
export default withToggle;
