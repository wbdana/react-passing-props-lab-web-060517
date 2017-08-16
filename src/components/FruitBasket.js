import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

  FruitBasket.defaultProps = {
    fruit: props.fruit,
    filters: props.filters,
    currentFilter: props.currentFilter,
    updateFilterCallback: props.updateFilterCallback
  }

  return(
    <div className="fruit-basket">
      <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
      <FilteredFruitList filter={props.filter} fruit={props.fruit} />
    </div>
  )
}

export default FruitBasket;
