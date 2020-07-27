import React, { Component } from "react";
import CardList from "./Components/card-list/CardList";
class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
			response.json().then((users) => {
				this.setState({ monsters: users });
				console.log(users);
			});
		});
	}

	render() {
		return (
			<div className="App">
				<div className="app-card">
					<CardList monsters={this.state.monsters} />
				</div>
			</div>
		);
	}
}

export default App;
