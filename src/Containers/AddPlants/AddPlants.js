import React, { Component } from 'react';
import './AddPlants.scss';

class AddPlants extends Component { 
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

    render() {
        return (
            <section className='add-plant-section'>
                <form>
                    <label>Name of Plant:</label>
                    <input type='text'
                           name='name'
                           value={this.state.name} 
                           onChange={(e) => this.handleChange(e)} />
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
                    <label>Price:</label>
                    <input type='text'
                           name='price'
                           value={this.state.price} 
                           onChange={(e) => this.handleChange(e)}/>
                    <label>Add Image:</label>
                    <input type='text'
                           name='image'
                           value={this.state.image} 
                           onChange={(e) => this.handleChange(e)}/>
                    <button>SUBMIT</button>
                </form>
            </section>
        )
    }
}

export default AddPlants;