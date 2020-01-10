import React, { Component } from 'react';
import './App.scss';
import  { getPlants } from '../../apiCalls';
import { addPlants } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../../Components/NavBar/NavBar';

class App extends Component  {
   
  componentDidMount = () => {
    const { addPlants } = this.props;
    getPlants()
      .then(plants => addPlants(plants.plants))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <main>
         <NavBar />
         <header>
             <h2> Plan(t) your Garden!</h2>
         </header>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addPlants: setPlants => dispatch( addPlants(setPlants) )
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
