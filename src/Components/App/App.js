import React, { Component } from 'react';
import './App.scss';
import  { getPlants } from '../../apiCalls';

class App extends Component  {
   
  componentDidMount = () => {
    getPlants()
      .then(plants => console.log(plants))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
         <p>Plants</p>
      </section>
    )
  }
}

export default App;
