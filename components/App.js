const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

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

  onAdoptPet(id){

     this.setState({
       adoptedPets:this.state.adoptedPets.concat(id)
     })
  }
  handleFilter(type){

     this.setState({
        filters: Object.assign({},this.state.filters,{
          type:type
        })
     })
  }
  onFindPetsClick(){
    let  url = "/api/pets" ;
   let uri =  this.state.filters.type === "all"? url : url+"?type="+this.state.filters.type

   fetch(uri)
    .then(res=>res.json())
    .then(pets=>this.setState({pets}))
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
              <Filters onChangeType={this.handleFilter.bind(this)} onFindPetsClick={this.onFindPetsClick.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets ={this.state.pets} onAdoptPets={this.state.adoptedPets}  onAdoptPet={this.onAdoptPet.bind(this)}/>
            </div>
          </div>

        </div>


      </div>
    );
  }
}

module.exports = App;
