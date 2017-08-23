import React from 'react';

export default class Pet extends React.Component {
  constructor() {
    super();
		
		this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }
	
	handleAdoptPet(){
		this.props.onAdoptPet(this.props.pet.id);
	}
	

  render() {
		
		const pet = this.props.pet;
		const isMale = pet.gender === 'male';
		const isFemale = pet.gender === 'female';
		const isAdopted = this.props.isAdopted;
		
    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} (gender: {isMale && '♂'}  {isFemale && '♀'})</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button> }
					{ isAdopted && <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}
