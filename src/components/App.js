import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  updateFilter = (event) => {
    this.setState({ currentFilter: event.target.value })
  }

  render() {
    return(
      <FruitBasket filters={this.state.filters} fruit={this.state.fruit} filter={this.state.currentFilter} updateFilterCallback={this.updateFilter} />
    )
  }
}
