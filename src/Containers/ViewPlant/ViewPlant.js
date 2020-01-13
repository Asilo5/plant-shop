import React, { Component } from 'react';
import './ViewPlant.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaSeedling } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavouritePlant, deleteFavouritePlant } from '../../actions';

class ViewPlant extends Component {

    toggleFavourite = () => {
        const { favouritePlants, addFavouritePlant, deleteFavouritePlant, _id } = this.props;
        !favouritePlants.includes(_id) ? addFavouritePlant(_id) : deleteFavouritePlant(_id);
      }

    render() {
        const { _id, name, price, image, description, care, deleteThePlant, favouritePlants } = this.props;
        const toggleStyle = favouritePlants.includes(_id) ? 'loved-plant' : 'unloved-plant';
        console.log(favouritePlants);
        return (
            <section className='view-plant'>
                <div className='buttons-section'>
                    <Link to='/allPlants' className='back-button'>Back</Link>
                    <button onClick={() => this.toggleFavourite(_id)} className={toggleStyle}><FaSeedling/></button>
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
}

export const mapStateToProps = ({ favouritePlants }) => ({
    favouritePlants
  });
  
  export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ 
      addFavouritePlant,
      deleteFavouritePlant
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlant);