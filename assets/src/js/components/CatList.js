import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {
    render() {
        return (
            <div>
                <h1>All Cats</h1>

                {this.props.cats.map((cat) => (
                    <div key = {cat.id}>
                        { cat.name } 
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cats: state
    }
}
export default connect(mapStateToProps)(CatList);