import React, { Component } from 'react';
import { connect } from 'react-redux';

const CatList = (props) => {
    return (
        <div>
            <h1>All Cats</h1>

            {
                props.cats.length 
                ? props.cats.map((cat) => (
                    <div key = {cat.id}>
                        { cat.name } 
                        <button onClick = { props.removeCat.bind(this, cat) }>Delete</button>
                    </div>
                )) 
                : 'No cats'
            }
        </div>
    );
}

export default CatList;