import React from 'react';

import Pet from './Pet';

export default class PetBrowser extends React.Component {
  render() {
    const generateListOfPetsFromData = this.props.pets.map(pet => (
      <Pet key={pet.id}
           pet={pet}
           onAdoptPet={this.props.onAdoptPet}
           isAdopted={this.props.adoptedPets.includes(pet.id)}  />
    ));
    return (
      <div className="ui cards">
        {generateListOfPetsFromData}
      </div>
    );
  }
}
