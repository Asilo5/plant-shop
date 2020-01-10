import React, { Component } from 'react';
import './Search.scss';
import { FaSearch } from 'react-icons/fa';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            plant : ''
        }
    }

    handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return (
            <form>
                <button> <FaSearch/> </button>
                <input placeholder='Search' 
                        type='text' 
                        name='plant' 
                        value={this.state.plant}
                        onChange = {(e) => this.handleChange(e)} />
            </form>
        )
    }
}

export default Search;