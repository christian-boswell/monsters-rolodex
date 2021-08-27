import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
    //.bind = method on any function that returns a new function where the context of "this" is whatever we pass to it. 

    this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

  handleChange = (e) => {
    //JS doesn't set the scope of "this" on functions

    //ES6 arrow functions automatically binds "this" to the context in which in was defined, in this case, the App component, aka Lexical scoping. You can't call .bind on them. 
    this.setState({ searchField: e.target.value})
  }

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		);
		return (
			<div className="App">
      <h1> Monsters Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
