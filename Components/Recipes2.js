import React from 'react'
import { useTable, useFilters, useState } from 'react-table'

import makeData from './data.json';
import ColumnFilter from './ColumnFilter';


function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Recipes',
        columns: [
          {
            Header: 'Recipe',
            accessor: 'label',
            Filter: ColumnFilter
          },
          {
            Header: 'Meal Type',
            accessor: 'mealType',
            Filter: ColumnFilter
          },
          {
            Header: 'Calories',
            accessor: 'calories',
            Filter: ColumnFilter
          },
        ],
      },
    
    ],
    []
  )

  const data = React.useMemo(() => makeData, [])
  console.log(data)

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  },
  useFilters);

  return (
    
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}
            
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


export default App