const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
	constructor() {
		super();
	}

	render() {
		const pets = this.props.pets.map((p) => {
			return (<Pet pet={p} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(p.id)} />)
		});
		return (
			<div className="ui cards">
				{pets}
			</div>
			);
		}
	}

	module.exports = PetBrowser;
