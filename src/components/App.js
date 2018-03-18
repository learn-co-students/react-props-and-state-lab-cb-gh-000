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

  handleChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    });
  }

  handleFindPets = () => {
    const baseUrl = '/api/pets';
    let type = this.state.filters.type;
    let url = type === 'all' ? baseUrl : baseUrl + '?type=' + type;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        this.setState({
          pets: data
        });
      })
  }

  handleAdoptPet = (id) => {
    let adoptedPets = this.state.adoptedPets;
    adoptedPets.push(id);

    this.setState({
      adoptedPets: adoptedPets
    });
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
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handleFindPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.handleAdoptPet}
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
