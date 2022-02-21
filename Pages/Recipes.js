import React from 'react'
import { useTable, useFilters, useGlobalFilter,useSortBy,useState } from 'react-table'
import BannerRecipe from '../Components/Banner-recipe';
import makeData from '../Pages/data.json';
import GlobalFilter from '../Components/GlobalFilter';
import './Recipes.css';
import BCard from '../Components/BCard';


function App() {
  const [showResults, setShowResults] = React.useState(false);



 

  const columns = React.useMemo(
    () => [
      {
        Header: 'Recipes',
        columns: [
          {
            Header: "",
            accessor:'id',
           
          
          },
          {

            Header: 'Recipe',
            accessor: 'label',
            
            
          },
          {
            Header: 'Meal Type',
            accessor: 'mealType',
      
          },
          {
            Header: 'Calories',
            accessor: 'calories',
            Cell: ({value }) => {return Math.floor(value)}
            
        
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
    prepareRow,
    state,
    setGlobalFilter, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  },
  useFilters,
  useGlobalFilter,
  useSortBy);

  const{globalFilter} = state;

 /* function hello () {
    console.log('hello')
  }*/

  

let showInfo= true;

  const onClick = () => {
    setShowResults(true);}
    /*

  showInfo = showResults ? <BCard /> : null 
  return (
   console.log(showResults),
   {showInfo},
   console.log(showInfo)
   
  )}
  */


  return (
    <>
    <BannerRecipe></BannerRecipe>
    {showInfo}
   
    <table {...getTableProps()}>
      <thead>
    
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className='recipe'{...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
              <span>
                {column.isSorted ? (column.isSortedDecs ? ' ': ''): ''}
              </span>
         
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}></GlobalFilter>
      <tbody {...getTableBodyProps()} >
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr{...row.getRowProps()} > <button onClick= {onClick}>Detail</button>
            <div className='InfoCard'>
    {showResults ? <BCard label ={makeData.label}></BCard>: null } 
   </div>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")} </td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  
   
   
    </>
  );
}



export default App