import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Typeahead } from "react-bootstrap-typeahead";
import { Alert, Button, FormGroup, Label } from "reactstrap";
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
    if (props.prospectId) {
      const selectedData = appService.getSelectedTerminalData();
      multiSelections.push(...selectedData.terminalDataList);
    }
  }, [props.prospectId,]); // [] => means it will execute only first time after rendering

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
    <>
      {isRequired && !multiSelections.length && (
        <Alert color="danger">Please select at least One User.</Alert>
      )}
      <FormGroup style={{ marginTop: "20px" }}>
        <Label>Multiple Selections</Label>
        <Typeahead
          id="terminal-typeahead-multiple"
          clearButton
          // we can function custom function inside labelKey:  labelKey={(option) => `${option.terminalName} ${option.terminalCode}`}
          labelKey="terminalName"
          multiple
          onChange={setMultiSelections}
          options={options}
          // renderMenu is a property that takes a function and return custom menu
          renderMenu={(results, menuProps) => (
            <Menu {...menuProps}>
              {results.map((result, index) => (
                <MenuItem key={index} option={result} position={index}>
                  {result.terminalName} - {result.terminalCode}
                </MenuItem>
              ))}
            </Menu>
          )}
          placeholder="Choose Users..."
          selected={multiSelections}
        />
      </FormGroup>

      <Button color="primary" onClick={saveUser}>
        Save Users
      </Button>
    </>
  );
};

export default AutoComplete;
