import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatList from '../components/CatList';
import CatActions from '../actions/CatActions';

class CatContainer extends Component {
    constructor() {
        super();
    }

    componentDidMount () {
        
    }

    componentDidUpdate () {
        
    }

    render () {
        let { cats } = this.props;
        return (
            <>
                <CatList 
                    cats = { cats } 
                    removeCat = { this.props.removeCat } 
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cats: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCat: (cat) => dispatch(CatActions.removeCat(cat))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer);