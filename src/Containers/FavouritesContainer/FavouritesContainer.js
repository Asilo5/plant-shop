import React from  'react';
import './FavouritesContainer.scss';
import { connect } from 'react-redux';
import Plant from '../../Components/Plant/Plant';


export const FavouritesContainer = ({favouritePlants, allPlants}) => {

    const lovePlant = allPlants.map((plant) => {
       if(favouritePlants.includes(plant._id)) {
         return <Plant {...plant} />
       }
    });

    // const findPlants = favouritePlants.map((plantID) => {
    //     return allPlants.find((plant) => plant._id === plantID)
    // });

    // const lovedPlant = findPlants.map((plant) => <Plant {...plant} />)

    return (
        <section className='fav-container'>
            <section className='fav-header'>
                <h2>Your Loved Plants</h2>
            </section>
            <section className='fav-section'>
                {favouritePlants.length === 0 ? <h3>ADD YOUR MOST LOVED PLANTS FIRST</h3> : {lovePlant}}
            </section>
        </section>
    )
}

export const mapStateToProps = ({favouritePlants, allPlants}) => ({
    favouritePlants,
    allPlants
});

export default connect(mapStateToProps)(FavouritesContainer);