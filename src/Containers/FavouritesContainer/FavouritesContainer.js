import React from  'react';
import './FavouritesContainer.scss';
import { connect } from 'react-redux';
import Plant from '../../Components/Plant/Plant';


export const FavouritesContainer = ({favouritePlants, allPlants}) => {
    const findPlants = favouritePlants.map((plantID) => {
        return allPlants.find((plant) => plant._id === plantID)
    });

    const lovedPlant = findPlants.map((plant) => <Plant {...plant} />)

    return (
        <section>
           {favouritePlants.length === 0 ? <h2>ADD YOUR MOST LOVED PLANTS FIRST</h2> : {lovedPlant}}
        </section>
    )
}

export const mapStateToProps = ({favouritePlants, allPlants}) => ({
    favouritePlants,
    allPlants
});

export default connect(mapStateToProps)(FavouritesContainer);