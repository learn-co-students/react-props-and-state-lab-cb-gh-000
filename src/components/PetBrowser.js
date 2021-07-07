import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards" onClick={ event => this.props.adoptPetHandler(event) }>
        {this.props.pets.map( pet => <Pet key={pet.id} petInfo={pet} />)}
      </div>
    )
  }
}

export default PetBrowser
