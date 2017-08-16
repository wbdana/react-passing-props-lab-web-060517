import React from 'react';

const Filter = (props) => {

  Filter.defaultProps = {
    filters: props.filters,
    handleChange: props.handleChange,
  }

  return(
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  )
}

export default Filter;
