import React from 'react';

const GlobalFilter = ({filter, setFilter}) => {

  return (
    <div className='globalFilter'>
      Search:  {' '}
      <input value={filter || ''} onChange={(e) =>setFilter(e.target.value)}></input>

      </div>
  )
}

export default GlobalFilter