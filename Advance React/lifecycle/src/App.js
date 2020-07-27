import React from 'react';
import './App.css';

import data from './data'
import Pokemon from './Pokemon';
import EarthquakesContainer from './components/EarthquakesContainer';

class App extends React.Component {
  constructor() {
    console.log("App constructor running")
    super();
    this.state = {
      // pokemon: data,
       pokemon: [] // pulling from Api, this way the data will change and trigger componentDidUpdate
    };
  }

  componentDidMount() {
    console.log("App componentDidMount")
     this.setState({pokemon: data});
  }


  //Checks for changing data, and lets us do something based on the data that has changed
  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate")
    if(prevProps.userId !== this.props.userId) {
      console.log('will never run')
    }

    if(prevState.pokemon !== this.state.pokemon) {
      console.log('pokemon changed')
    }
  }

  render() {
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
        <EarthquakesContainer />
      </div>
    );
  }
}

export default App;

