import React from 'react';
import './ViewPlant.scss';
import { Link } from 'react-router-dom';

const ViewPlant = ({ _id, name, price, image, description, care }) => {
    return (
        <section className='view-plant'>
            <Link to='/allPlants' className='back-button'>Back</Link>
            <section className='all-plant'>
                <img src={image} alt={name} />
                <div className='view-plant-info'>
                    <h2>{name}</h2>
                    <h3>£{price}</h3>
                    <p>{description}</p>
                    <p>{care}</p>
                </div>
            </section>
        </section>
    )
}

export default ViewPlant;