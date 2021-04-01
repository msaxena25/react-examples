import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { FormGroup, Label, Button, Container, Alert } from "reactstrap";
import AppService from "./app.service";

const AutoComplete = (props) => {
  const [multiSelections, setMultiSelections] = useState([]);
  const [options, setOptions] = useState([]);
  const [isRequired, setIsRequired] = useState(false);
  const appService = new AppService(); // This need to improve

  useEffect(() => {


    // appService.getUsers().then((data) => {
    //   setOptions(data);
    // });

    setOptions(appService.getStaticData().terminalDataList);
  }, []); // [] => means it will execute only first time after rendering

  const saveUser = () => {
    if (!multiSelections.length) {
      setIsRequired(true);
    } else {
      setIsRequired(false);
      const payload = createPayload(multiSelections);
      appService.postUsers(payload).then((response) => {
        alert("success");
      });
    }
  };

  console.log('Get Prospect Id', props.prospectId);

  const createPayload = (multiSelections) => {
    const payload = [];
    multiSelections.forEach((terminal) => {
      payload.push({
        prospectId: props.prospectId,
        name: terminal.terminalName,
        id: terminal.terminalId,
      });
    });

    return payload;
  };

  // Don't Override or add your custom handle Change method here. Use setMultiSelections only.
  // If you have to update data to send in API, then change that data before sending.
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
          labelKey="terminalName"
          multiple
          onChange={setMultiSelections}
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
