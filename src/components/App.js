import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  //add the ID of the adobpted pet to state
  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id],
    });
  };


  onFindPetsClick = (type) => {
    var url = '/api/pets';
    //create alternate URLS if the type isnt all
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }
    //use fetch to add the data to the pets state
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                filters={this.state.filters}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
