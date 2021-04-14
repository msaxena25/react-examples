import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const ReactAgGrid = () => {
  const [setGridApi] = useState(null);
  const [setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  // static data - you can use this if test wit static data
/*   const data = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota1", model: "Celica", price: 35000 },
    { make: "Ford1", model: "Mondeo", price: 32000 },
    { make: "Porsche1", model: "Boxter", price: 72000 },
    { make: "Toyota2", model: "Celica", price: 35000 },
    { make: "Ford2", model: "Mondeo", price: 32000 },
    { make: "Porsche2", model: "Boxter", price: 72000 },
  ]; */

  // load dynamic data
  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
      setRowData(data);
    };

    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => updateData(data));
  }

  return (
    <>
      <div
        id="myGrid"
        className="ag-theme-alpine"
        style={{ height: 400, width: 700 }}
      >
        <AgGridReact
          defaultColDef={{
            sortable: true,
            filter: true,
          }}
          rowDragManaged={true}
          animateRows={true}
          onGridReady={onGridReady}
          rowData={rowData}
          pagination={true}
          paginationPageSize={5}
        >
          <AgGridColumn field="athlete" rowDrag={true} />
          <AgGridColumn field="country" />
          <AgGridColumn field="year" />
          <AgGridColumn field="date" />
          <AgGridColumn field="sport" />
        </AgGridReact>
      </div>
    </>
  );
};

export default ReactAgGrid;
