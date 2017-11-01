import React from 'react';

/*
Should have an onAdoptPet callback prop. 
This callback prop gets called with the pet's id when the user clicks 
the adopt pet button — not when they click the disabled button!
*/

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleAdoption = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">

            {this.props.pet.name}

            (gender: {this.props.pet.gender === 'female' ? '♀' : '♂'} )

          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            this.props.isAdopted
              ? <button className="ui disabled button">Already adopted</button>
              : <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;