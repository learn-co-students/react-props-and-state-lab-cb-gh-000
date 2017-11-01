import React from 'react';

import Pet from './Pet';

/*
Should have an adoptedPets prop. Use this prop to figure out if a pet is adopted or not,
and pass that result to the <Pet /> components in the form of an isAdopted prop.
*/

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((pet, index) => (
        <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    ))

    return (
      <div className="ui cards">
        { pets }
      </div>
    );
  }
}

export default PetBrowser;
