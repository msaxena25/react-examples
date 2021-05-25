import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './CenterList.css';

const baseURL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?`;

//
const CenterList = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState(null);
  const [dateColumns, setDateColumns] = useState([]);
  const [pinCode, setPinCode] = useState('188');

  let dates = [];
  let updatedData = [];
  const updateData = (data, isUpdate) => {
    dates = [];
    updatedData = [];
    data.forEach((item) => {
      item.sessions = item.sessions.filter((el) => el.min_age_limit === 18);
      if (item.sessions.length) {
        item.sessions.forEach((element) => {
          if (!dates.includes(element.date)) {
            dates.push(element.date);
          }
          item[element.date] = `${element.available_capacity}`; // (${element.min_age_limit})
        });
        item.age = item.sessions[0].min_age_limit;
        item.vaccine = item.sessions[0].vaccine;
        item.fee = item.vaccine_fees ? item.vaccine_fees[0].fee : 'N/A';
        updatedData.push(item);
      }
    });
    setDateColumns(dates);
    console.table(updatedData);
    if (isUpdate) {
      gridApi.setRowData(updatedData);
    } else {
      setRowData(updatedData);
    }
  };

  const fetchData = () => {
    const d = new Date();
    const date = `0${d.getDate()}-0${d.getMonth() + 1}-${d.getFullYear()}`;

    // pincode=${pinCode}
    const SEARCH_URI = `${baseURL}district_id=${pinCode}&date=${date}`;
    fetch(SEARCH_URI)
      .then((resp) => resp.json())
      .then((data) => updateData(data.centers, false));
  };

  // load dynamic data
  function onGridReady(params) {
    setGridApi(params.api);
    fetchData();
  }

  const hitAPI = (pin, date) => {
    const SEARCH_URI = `${baseURL}district_id=${pinCode}&date=${date}`;
    fetch(SEARCH_URI)
      .then((resp) => resp.json())
      .then((data) => updateData(data.centers, true));
  };

  const onChangePinCode = (e) => {
    setPinCode(e.target.value);
  };

  const onSearch = () => {
    const d = new Date();
    const date = `0${d.getDate()}-0${d.getMonth() + 1}-${d.getFullYear()}`;
    setTimeout(() => {
      hitAPI(pinCode, date);
    }, 1000);
  };

  const onNext = () => {
    hitAPI(pinCode, dateColumns[dateColumns.length - 1]);
  };

  const onPrevious = () => {
    if (dateColumns[0]) {
      let d = dateColumns[0].split('-');
      d = [d[1], d[0], d[2]].join('-');
      let date = new Date(d);
      date.setDate(date.getDate() - 5);
      const finalDate = `0${date.getDate()}-0${date.getMonth() + 1}-${date.getFullYear()}`;
      hitAPI(pinCode, finalDate);
    }
  };

  const rowClassRules = {
    'rag-green': 'data.fee_type === "Paid"',
    'rag-amber': 'data.age >= 20 && data.age < 25',
    'rag-red': 'data.age >= 25',
  };
  const cellClassRules = {
    'col-green': 'data.vaccine === "COVAXIN"',
    'rag-red': 'x >= 25',
  };

  return (
    <>
      <p>GZB - 651, Gurgaon Id -188, Noida - 650, Kheri - 668, Kanpur - 664</p>
      <Form inline>
        <FormGroup>
          <Label for='pinCode'>Dist. Code</Label>
          <Input
            type='text'
            name='pinCode'
            id='pinCode'
            value={pinCode}
            placeholder='Enter Pin code'
            onChange={(e) => {
              onChangePinCode(e);
            }}
          />
        </FormGroup>
        <Button onClick={onSearch}>Search</Button>
        <Button onClick={onPrevious}>Prev</Button>
        <Button onClick={onNext}>Next</Button>
      </Form>
      <div id='myGrid' className='ag-theme-alpine' style={{ height: 500 }}>
        <AgGridReact
          rowClassRules={rowClassRules}
          defaultColDef={{
            sortable: true,
            filter: true,
          }}
          rowDragManaged={true}
          animateRows={true}
          onGridReady={onGridReady}
          rowData={rowData}
          pagination={true}
          paginationPageSize={50}
        >
          {/* <AgGridColumn field='district_name' /> */}
          <AgGridColumn field='name' />
          <AgGridColumn field='address' />
          {/* <AgGridColumn field='age' width={90} /> */}
          {dateColumns.map((date, index) => {
            return (
              <AgGridColumn
                width={120}
                key={index}
                field={date}
                cellStyle={{ backgroundColor: '#aaffaa' }}
                cellClassRules={ragCellClassRules}
              />
            );
          })}
          {/* <AgGridColumn field='fee_type' width={120} /> */}
          <AgGridColumn field='fee' width={80} />

          <AgGridColumn field='vaccine' cellClassRules={cellClassRules} />
        </AgGridReact>
      </div>
    </>
  );
};

var ragCellClassRules = {
  'rag-green-outer': function (params) {
    return params.value > 0;
  },
};

export default CenterList;
