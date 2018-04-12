import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Banner from './components/banner/banner';
import units from "./units.json";
import UnitBlock from "./components/UnitBlock";
import scoreCounter from "./components/scoreCounter";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    units
  };
  
  handleBlah = () => {
    let clickedArray = [];

  }
  
  render() {
    return (
      <div class="container">
        <div class="row">
          <Banner />
        </div>
        <h1>Score: </h1>
        <scoreCounter/>
        <div class="row">
        {this.state.units.map(unit => (
          <div class="col-lg-3">
          <Wrapper>
            <UnitBlock
              id={unit.id}
              key={unit.id}
              name={unit.name}
              image={unit.image}
            />
          </Wrapper>
          </div>
        ))}
        </div>

      </div>
    );
  }
}

export default App;
