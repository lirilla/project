import React, { Component } from 'react';
import {connect} from 'react-redux';
import CatActions from '../actions/CatActions'

class CatForm extends Component {
    constructor () {
		super();
    }
    
    handleSubmit (e) {
        e.preventDefault();
        const name = this.getName.value;
        const data = {
            name
        }
        this.props.dispatch(CatActions.addCat(data));
        this.getName.value = '';
    }
  
    render() {
        return (
        <div>
        <h1>Add Cat</h1>
        <form onSubmit = { this.handleSubmit.bind(this) }>
            <input required type="text" ref={(input) => this.getName = input} placeholder="Enter Cat Name"/>
            <button>Add Cat</button>
        </form>
        </div>
        );
    }
}
export default connect()(CatForm);