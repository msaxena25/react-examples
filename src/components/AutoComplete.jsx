import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { FormGroup, Label, Button, Container, Alert } from "reactstrap";
import AppService from "./app.service";

const AutoComplete = () => {
  const [multiSelections, setMultiSelections] = useState([]);
  const [options, setOptions] = useState([]);
  const [isRequired, setIsRequired] = useState(false);
  const appService = new AppService();

  useEffect(() => {
    appService.getUsers().then((data) => {
      setOptions(data);
    });
  }, []); // [] => means it will execute only first time after rendering

  const saveUser = () => {
    console.log(multiSelections);
    if (!multiSelections.length) {
      setIsRequired(true);
    } else {
      setIsRequired(false);
      appService.postUsers({}).then((response) => {
        alert("success");
      });
    }
  };

  const handleChange = (selectedOptions, e) => {
    debugger
    const obj = {
      prospectId: 1234,
      name: selectedOptions[0].name
    }
    console.log(selectedOptions); 
    setMultiSelections([obj]);
  }

  return (
    <Container>
      {isRequired && !multiSelections.length && (
        <Alert color="danger">Please select at least One User.</Alert>
      )}
      <FormGroup style={{ marginTop: "20px" }}>
        <Label>Multiple Selections</Label>
        <Typeahead
          id="terminal-typeahead-multiple"
        clearButton 
          labelKey="name"
          multiple
          onChange={handleChange}
          options={options}
          placeholder="Choose Users..."
          selected={multiSelections}
        />
      </FormGroup>

      <Button color="primary" onClick={saveUser}>
        Save Users
      </Button>
    </Container>
  );
};

export default AutoComplete;
