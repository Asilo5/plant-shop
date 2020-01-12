import React from 'react';
import './ViewPlant.scss';
import { Link } from 'react-router-dom';

const ViewPlant = ({ _id, name, price, image, description, care }) => {
    return (
        <section>
            <Link to='/allPlants'>Back</Link>
            <h2>{name}</h2>
        </section>
    )
}

export default ViewPlant;