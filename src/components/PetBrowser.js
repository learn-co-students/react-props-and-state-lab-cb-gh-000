import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    let { pets, adoptedPets, onAdoptPet } = this.props;
    return (
      <div className="ui cards">
        {pets.map(pet => {
            return <Pet
              key={pet.id}
              pet={pet}
              onAdoptPet={onAdoptPet}
              isAdopted={adoptedPets.includes(pet.id)} />
          })
        }
      </div>
    );
  }
}

export default PetBrowser;
