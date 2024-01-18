import { Cell, Column, ColumnHeaderCell, Table2 } from "@blueprintjs/table";
import React from "react";

export default function Bhavya() {
  const data = [
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Smith", age: 30, city: "San Francisco" },
    { id: 3, name: "Bob Johnson", age: 22, city: "Los Angeles" },
  ];

  const renderCell = (rowIndex, columnIndex) => {
    const value = data[rowIndex][Object.keys(data[rowIndex])[columnIndex]];
    return <Cell>{value}</Cell>;
  };
  return (
    <>
      <h1>Bhavya Component</h1>
      <Table2 numRows={data.length} defaultRowHeight={30}>
        <Column
          columnHeaderCellRenderer={() => <ColumnHeaderCell name="ID" />}
          cellRenderer={renderCell}
        />
        <Column
          columnHeaderCellRenderer={() => <ColumnHeaderCell name="Name" />}
          cellRenderer={renderCell}
        />
        <Column
          columnHeaderCellRenderer={() => <ColumnHeaderCell name="Age" />}
          cellRenderer={renderCell}
        />
        <Column
          columnHeaderCellRenderer={() => <ColumnHeaderCell name="City" />}
          cellRenderer={renderCell}
        />
      </Table2>
    </>
  );
}
