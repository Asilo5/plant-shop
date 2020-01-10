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
         <header>
             <h2> Plan(t) your Garden!</h2>
         </header>
      </section>
    )
  }
}

export default App;
