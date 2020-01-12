import React from 'react';
import './Plant.scss';
import { FaSeedling } from 'react-icons/fa';

const Plant = ({id, name, price, image}) => {

    return (
      <section className='plant-info'>
        <img src={image} alt={name} />
        <div className='plant-name'>
            <div>
                <p>{name}</p>
                <p>£{price}</p>
            </div>
            <button><FaSeedling/></button>
        </div>
      </section>
    )
}

export default Plant;