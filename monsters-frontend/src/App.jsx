import React, { Component } from "react";
import CardList from "./Components/card-list/CardList";
import SearchField from "./Components/searchField/SearchField";
import "./app.css";
class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
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

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1 className="monsters-title">Monster Rolodex</h1>
				<SearchField
					placeholder="Search your Robot..."
					handleChange={(e) => this.handleChange(e)}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
