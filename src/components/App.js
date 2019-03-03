import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {

    let fetchedPets = [];
    const self = this;
    let url;

    if(this.state.filters.type === 'all') {
      url = '/api/pets';
    } else {
      url = '/api/pets?type=' + this.state.filters.type;
    }

    fetch(url).then(function(response) {
      return response.json();
    }).then(function(fetchjson) {
      fetchedPets = fetchjson;
      self.setState({
        pets: fetchedPets
      })
    });

  }

  onAdoptPet = (id) => {
    const index = this.state.pets.findIndex(pet => pet.id === id);
    let fixArray = [...this.state.pets];
    fixArray[index].isAdopted = true;
    this.setState({
      pets: fixArray
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
