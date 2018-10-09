import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
    this.updateType = this.updateType.bind(this);
    this.fetchEm = this.fetchEm.bind(this);
    this.adoptPets =this.adoptPets.bind(this);
  }

  adoptPets =(id)=>{
    let pets = this.state.pets
    pets.map((pet, index) =>{
      if(pet.id === id){
        pets[index].isAdopted=true;
        this.setState({
          pets: this.state.pets
        })
      }
      return pets;
    });
  }

  updateType(type){
    this.setState({
      filters: {
        ...this.state.filters,
        type: type}
    });
  }
  
  fetchEm(){
    let url = '/api/pets';

    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
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
              <Filters  filters={this.state.filters}
                        onChangeType={this.updateType} 
                        onFindPetsClick={this.fetchEm} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} 
                          onAdoptPet={this.adoptPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
