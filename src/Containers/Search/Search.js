import React, { Component } from 'react';
import './Search.scss';

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
                <button> <span role='img' aria-label='search button'>🔍</span></button>
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