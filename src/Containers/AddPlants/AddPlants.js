import React, { Component } from 'react';
import './AddPlants.scss';
import { postPlant } from '../../apiCalls';
import { newPlant, hasError, successMsg } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


export class AddPlants extends Component { 
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            care: '',
            price: 0,
            image: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
        this.setState({ price : parseInt(e.target.value) })
    }

    handleSubmit = (e) => {
      e.preventDefault();

      const {newPlant, hasError, successMsg} = this.props;

       postPlant(this.state)
         .then(data => {
            newPlant(data.plants);
            successMsg('YOUR PLANT IS PUBLISHED, CLICK HERE!');
         })
         .catch(err => hasError('Could not submit plant, try again :( '));

       this.clearInputs();
    }

    clearInputs = () => {
        this.setState( {
            name: '',
            description: '',
            care: '',
            price: 0,
            image: ''
        })
    }

    render() {
        const { succeededMsg, errorMsg} = this.props;
        return (
            <section className='add-plant-section'>
                <h2>Add Your Plants!</h2>
                {succeededMsg.length > 1 ? <NavLink to='/allPlants' className='added-msg'>{succeededMsg}</NavLink> : <p className='error-msg'>{errorMsg}</p>}
            
                <form>
                    <label>Name of Plant:</label>
                    <input type='text'
                           name='name'
                           value={this.state.name}
                           onChange={(e) => this.handleChange(e)}/>
                    <label>Description:</label>
                    <input type='text'
                           name='description'
                           value={this.state.description} 
                           onChange={(e) => this.handleChange(e)}/>
                    <label>Care of Plant:</label>
                    <input type='text'
                           name='care'
                           value={this.state.care} 
                           onChange={(e) => this.handleChange(e)}/>
                    <label>Add Image:</label>
                    <input type='text'
                           name='image'
                           value={this.state.image} 
                           onChange={(e) => this.handleChange(e)}/>
                    <label>Price:</label>
                    <input type='number'
                           name='price'
                           value={this.state.price} 
                           onChange={(e) => this.handleChange(e)}/>
                    <button onClick={(e) => this.handleSubmit(e)}>SUBMIT</button>
                </form>
            </section>
        )
    }
}

export const mapStateToProps = ({succeededMsg, errorMsg}) => ({
    succeededMsg, 
    errorMsg
});

export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
      newPlant: plant => dispatch(newPlant(plant)),
      hasError: error => dispatch(hasError(error)),
      successMsg: msg => dispatch(successMsg(msg))
    }, dispatch)
);

AddPlants.propTypes = {
    succeededMsg: PropTypes.string,
    errorMsg: PropTypes.string,
    newPlant: PropTypes.func,
    hasError: PropTypes.func,
    successMsg: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlants);