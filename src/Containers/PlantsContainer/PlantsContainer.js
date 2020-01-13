import React from 'react';
import './PlantsContainer.scss';
import Plant from '../Plant/Plant';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const PlantsContainer = ({ allPlants }) => {
   let plantsList = allPlants.map((plant) => {
     return <Plant key={plant._id} {...plant} />
   });

    return(
      <section>
          <div className='plants-header'>
            <h2>Our Plants</h2>
          </div>
          <div className='plant-list'>
            {plantsList}
          </div>
      </section>
    )
}

export const mapStateToProps = (state) => ({
    allPlants: state.allPlants
});

PlantsContainer.propTypes = {
  allPlants: PropTypes.array
}

export default connect(mapStateToProps)(PlantsContainer);