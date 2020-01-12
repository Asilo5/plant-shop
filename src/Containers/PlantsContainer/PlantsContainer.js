import React from 'react';
import './PlantsContainer.scss';
import { connect } from 'react-redux';

export const PlantsContainer = ({ allPlants }) => {
   let plantsList = allPlants.map((plant) => {
     return 
   });

    return(
      <section>
          <div className='plants-header'>
            <h2>Our Plants</h2>
          </div>
          {plantsList}
      </section>
    )
}

export const mapStateToProps = (state) => ({
    allPlants: state.allPlants
})

export default connect(mapStateToProps)(PlantsContainer);