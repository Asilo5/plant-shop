import React from 'react';
import './Plant.scss';

const Plant = ({id, name, description, care, price, image}) => {

    return (
      <section className='plant-info'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{price}</p>
      </section>
    )
}

export default Plant;