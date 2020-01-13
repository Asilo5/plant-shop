import React from  'react';
import './FavouritesContainer.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export const FavouritesContainer = () => {
    
    return (
        <section>

        </section>
    )
}

export const mapStateToProps = () => ({

});

export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({

    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesContainer);