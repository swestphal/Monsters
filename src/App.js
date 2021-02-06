import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList.component';
import { SearchBox } from './components/searchBox/searchBox.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(reject => console.log("failed"))
  }

  setSearchField = (term) => {

    this.setState({ searchField: term })
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.setSearchField} placeholder="Search monster" />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}
export default App;
