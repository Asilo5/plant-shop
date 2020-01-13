import React from 'react';
import './ViewPlant.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaSeedling } from 'react-icons/fa';

const ViewPlant = ({ _id, name, price, image, description, care, deleteThePlant }) => {
    return (
        <section className='view-plant'>
            <div className='buttons-section'>
                <Link to='/allPlants' className='back-button'>Back</Link>
                <button><FaSeedling/></button>
            </div>
            <section className='all-plant'>
                <img src={image} alt={name} />
                <div className='view-plant-info'>
                    <h2>{name}</h2>
                    <h3>£{price}</h3>
                    <p>Description: {description}</p>
                    <p>Care: {care}</p>
                    <NavLink to='/allPlants' className='delete-btn' onClick={() => deleteThePlant(_id)}>Remove Plant</NavLink>
                </div>
            </section>
        </section>
    )
}

export default ViewPlant;