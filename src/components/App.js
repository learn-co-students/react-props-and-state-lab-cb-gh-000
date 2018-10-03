import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

  }
  onAdoptPet=(id)=>{
    console.log(id);
    this.state.pets.map((item,i)=>{

        if(item.id===id)
        {
          var pets=this.state.pets;
          console.log(pets[i]);
          pets[i].isAdopted=true;
          this.setState({
    pets
  })

        }
    });
  }
  ComponentDidMount(){
      this.fetchPet();
  }
handleFilterChange=(event)=>{
  var filter=[...this.state.filters];
  filter.type=event.target.value;
  this.setState(filters:filter);
}
fetchPet=()=>{
  var baseUrl='/api/pets';
  var filters=this.state.filters;
  switch (filters.type) {
    case 'all':

      break;

    default:
      baseUrl+='?type='+filters.type;

  }
  fetch(baseUrl).then(res=>res.json()).then(pet=>{

    this.setState({pets:pet});
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
              <Filters filters={this.state.filters} onChangeType={this.handleFilterChange} onFindPetsClick={this.fetchPet} />
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
