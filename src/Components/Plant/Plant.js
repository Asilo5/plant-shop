import React from 'react';
import './Plant.scss';
import { Link } from 'react-router-dom';
import { FaSeedling } from 'react-icons/fa';

const Plant = ({_id, name, price, image}) => {

    return (
      <section className='plant-info'>
          <Link to={(`/plant/${_id}`)}>
            <img src={image} alt={name} />
            <div className='plant-name'>
                <div>
                    <p>{name}</p>
                    <p>£{price}</p>
                </div>
                <button><FaSeedling/></button>
            </div>
          </Link>
      </section>
    )
}

export default Plant;