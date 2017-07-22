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

    this.getPets = this.getPets.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  getPets(){
    let url = '/api/pets';
    if(this.state.filters.type !== 'all') url += `?type=${this.state.filters.type}`;
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
  }

  handleAdoptPet(petId) {
    this.setState({ adoptedPets: [...this.state.adoptedPets, petId] });
  }

  handleChangeFilter(type){
    this.setState({ filters: {type} });
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
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeFilter}
                       onFindPetsClick={this.getPets} />

            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          adoptedPets={this.state.adoptedPets}
                          onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
