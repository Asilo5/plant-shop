import React, { Component } from 'react';
import './App.scss';
import  { getPlants, deletePlantFetch } from '../../apiCalls';
import { addPlants, hasError, deletePlant } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from '../../Components/NavBar/NavBar';
import ViewPlant from '../ViewPlant/ViewPlant';
import PlantsContainer from '../PlantsContainer/PlantsContainer';
import AddPlants from '../AddPlants/AddPlants';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import Header from '../../Components/Header/Header';

export class App extends Component  {
   
  componentDidMount = () => {
    const { addPlants, hasError } = this.props;
    getPlants()
      .then(plants => addPlants(plants.plants))
      .catch(err => hasError(err.error))
  }

  deleteThePlant = (id) => {
    const { deletePlant, hasError } = this.props;
    deletePlantFetch(id)
      .then(plants => {
        console.log(plants)
        deletePlant(plants.plants._id)
      })
      .catch(err => hasError(err.error))
  }

  render() {
    return (
      <main>
         <NavBar />
         <Route exact path='/' component={Header} />
         <Route exact path='/allPlants' render={() => <PlantsContainer deleteThePlant={this.deleteThePlant} />} />
         <Route exact path='/plant/:id' render={ ({ match }) => {
           const { id } = match.params;
           const { allPlants } = this.props;

           let plantsList = allPlants.find((plant) => plant._id === id);

           return <ViewPlant {...plantsList} deleteThePlant={this.deleteThePlant} />
         } } />
         <Route exact path='/addPlants' component={AddPlants} />
         <Route exact path='/lovedPlants' component={FavouritesContainer} />
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  allPlants: state.allPlants
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addPlants: setPlants => dispatch( addPlants(setPlants) ),
    hasError: error => dispatch( hasError(error) ),
    deletePlant: id => dispatch( deletePlant(id) )
  }, dispatch)
)

App.propTypes = {
  allPlants: PropTypes.array,
  addPlants: PropTypes.func, 
  hasError: PropTypes.func,
  deletePlant: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
