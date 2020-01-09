import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import { getAll, getByType } from '../data/pets';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: getAll(),
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    }, () => console.log(this.state.filters.type))
  }

  onFindPetsClick = () => {
    const type = this.state.filters.type;

    if (type === 'all') {
        this.setState({
          pets: getAll()
        });
    } else {
        this.setState({
          pets: getByType(type)
        }, () => console.log(this.state));
    }
  }

  onAdoptPet = event => {
    const id = event.target.id;
    if (!id) {
      return;
    }
    this.setState(prevState => {
      prevState.pets.find(pet => pet.id === id).isAdopted = true;
      return {};
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
              <Filters
                handleSelectChange={ this.onChangeType }
                handleFindPetsClick={ this.onFindPetsClick }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } adoptPetHandler={ this.onAdoptPet }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
