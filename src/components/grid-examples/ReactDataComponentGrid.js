import * as ReactDataComponent from "react-data-components";
import "react-data-components/css/table-twbs.css";

const ReactDataComponentGrid = () => {
  var columns = [
    { title: "Name", prop: "name" },
    { title: "City", prop: "city" },
    { title: "Address", prop: "address" },
    { title: "Phone", prop: "phone" },
  ];

  // It also supports arrays in data
  // [ 'name value', 'city value', 'address value', 'phone value' ]

  var data = [];
  for (let i = 0; i < 80; i++) {
    const obj = {
      name: "JS - " + i,
      city: "City - " + i,
      address: "Address - " + i,
      phone: "Phone - " + i,
    };
    data.push(obj);
  }
  return (
    <div>
      <h6>
        This is React data Component Grid - Layout of this grid is not in proper
        way, You may need to more override css <header></header>
      </h6>
      {data && data.length ? (
        <ReactDataComponent.DataTable
          keys="name"
          columns={columns}
          initialData={data}
          initialPageLength={5}
          initialSortBy={{ prop: "city", order: "descending" }}
        />
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default ReactDataComponentGrid;
