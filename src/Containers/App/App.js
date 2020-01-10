import React, { Component } from 'react';
import './App.scss';
import  { getPlants } from '../../apiCalls';
import NavBar from '../../Components/NavBar/NavBar';

class App extends Component  {
   
  componentDidMount = () => {
    getPlants()
      .then(plants => console.log(plants))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
         <NavBar />
      </section>
    )
  }
}

export default App;
