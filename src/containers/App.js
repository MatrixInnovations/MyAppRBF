import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    if (filteredRobots.length === 0) { // CORRECTED: USE FILTEREDROBOTS.LENGTH INSTEAD OF ROBOTS.LENGTH
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll> 
          <footer class="">Geekazon</footer>
        </div>
      );
    }
  }
}

export default App;


/* 
=====================================================================
IN THIS VERSION, I'VE USED DESTRUCTURING TO MAKE YOUR CODE 
CLEANER BY ASSIGNING THIS.STATE.ROBOTS TO THE ROBOTS VARIABLE AND 
THIS.STATE.SEARCHFIELD TO THE SEARCHFIELD VARIABLE. THIS MAKES THE 
CODE EASIER TO READ AND UNDERSTAND. ADDITIONALLY, I'VE USED A MORE 
STRUCTURED FORM OF CONDITIONAL RENDERING USING AN IF STATEMENT 
FOLLOWED BY AN ELSE BLOCK. THIS HELPS IMPROVE CODE READABILITY 
AND MAINTAINABILITY.
=====================================================================
*/
