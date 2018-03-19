const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    
    this.handleClickAdopt = this.handleClickAdopt.bind(this);
  }

  handleClickAdopt(event) {
    this.props.onAdoptPet(this.props.pet.id);  
  }
  
  render() {
    const {pet, isAdopted} = this.props;
    const {name, type, age, weight, gender} = this.props.pet; 
    
    return (
        <div className="card">
        <div className="content">
          <a className="header">{name} {gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleClickAdopt}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;