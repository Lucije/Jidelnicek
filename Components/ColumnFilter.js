import React from 'react';

const ColumnFilter = ({column}) => {
const {filterValue, setFilterValue} = column;


const changeValue = (e) => {
  setFilterValue (e.target.value);
 
  
}

  return (
    <span>
 Search: {''}
 <input type= "text" value={filterValue || ''} onChange={changeValue}></input>

    </span>

  )


}

export default ColumnFilter