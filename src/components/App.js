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

    this.fetchPets = this.fetchPets.bind(this)
    this.changeType = this.changeType.bind(this)
    this.adpotPet = this.adpotPet.bind(this)
  }

  fetchPets() {
    let url = '/api/pets'

    if(this.state.filters.type !== 'all') {
      url = url + `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }))
  }

  changeType(newtype) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: newtype})
    })
  }

  adpotPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
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
              <Filters filters={this.state.filters} onFindPetsClick={this.fetchPets} onChangeType={this.changeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adpotPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
