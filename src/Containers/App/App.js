import React, { Component } from 'react';
import './App.scss';
import  { getPlants } from '../../apiCalls';
import { addPlants, hasError } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, Route } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import PlantsContainer from '../PlantsContainer';
import AddPlants from '../AddPlants';
import FavouritesContainer from '../FavouritesContainer';

export class App extends Component  {
   
  componentDidMount = () => {
    const { addPlants, hasError } = this.props;
    getPlants()
      .then(plants => addPlants(plants.plants))
      .catch(err => hasError(err.error))
  }

  render() {
    return (
      <main>
         <NavBar />
         <Route exact path='/' component={Header} />
         <Route exact path='/allPlants' component={PlantsContainer} />
         <Route exact path='/addPlants' component={AddPlants} />
         <Route exact path='/favourites' component={FavouritesContainer} />
         <header>
            <section>
              <h2> Plan(t) your Garden!</h2>
              <NavLink to='/allplants'>SEE OUR PLANTS</NavLink>
            </section>
         </header>
      </main>
    )
  }
}

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addPlants: setPlants => dispatch( addPlants(setPlants) ),
    hasError: error => dispatch( hasError(error) )
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
