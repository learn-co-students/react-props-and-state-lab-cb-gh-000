import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">
            {this.props.pet.type}
            {this.props.pet.gender=='male'?'♂':'♀'}
            </span>
          </div>
          <div className="description">
            <p>Age: PET AGE {this.props.pet.age}</p>
            <p>Weight: PET WEIGHT {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted==true?  <button className="ui disabled button" >Already adopted {this.props.pet.isAdopted}</button>
:  <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
      }


        </div>
      </div>
    )
  }
}

export default Pet
