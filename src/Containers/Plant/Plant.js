import React, {Component} from 'react';
import './Plant.scss';
import { Link } from 'react-router-dom';
import { FaSeedling } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavouritePlant, deleteFavouritePlant } from '../../actions';
 
class Plant extends Component {

 toggleFavourite = (_id) => {
   const { favouritePlants, addFavouritePlant, deleteFavouritePlant } = this.props;
   !favouritePlants.includes((_id)) ? addFavouritePlant(_id) : deleteFavouritePlant(_id);
 }

 render () {
  const {_id, name, price, image, favouritePlants } = this.props;
  const toggleStyle = favouritePlants.includes(_id) ? 'loved-plant' : 'unloved-plant';
  console.log(favouritePlants);
  return (
    <section className='plant-info'>
        <Link to={(`/plant/${_id}`)}>
          <img src={image} alt={name} />
          <div className='plant-name'>
              <div>
                  <p>{name}</p>
                  <p>£{price}</p>
              </div>
              <button onClick={() => this.toggleFavourite(_id)} className={toggleStyle} ><FaSeedling/></button>
          </div>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Plant);