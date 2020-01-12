import React from 'react';
import './PlantsContainer.scss';
import Plant from '../../Components/Plant/Plant';
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
})

export default connect(mapStateToProps)(PlantsContainer);