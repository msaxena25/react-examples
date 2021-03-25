import React, {useState, Fragment} from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import { FormGroup, Label} from 'reactstrap';
import {Form} from 'react-bootstrap';

const AutoComplete = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);
    var options = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Miles'},
        {id: 3, name: 'Charles'},
        {id: 4, name: 'Herbie'},
      ];
    return (
       
      <Fragment>
      
        <FormGroup style={{ marginTop: '20px' }}>
          <Label>Multiple Selections</Label>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            onChange={setMultiSelections}
            options={options}
            placeholder="Choose several states..."
            selected={multiSelections}
          />
        </FormGroup>
      </Fragment>
    );
  };

  export default AutoComplete;