import React from 'react';

import { connect } from 'react-redux';

import { } from '../Actions';

class TodoList extends React.Component {
    state = {
        newItem: '',

    }

    render() {
        return (
            <div>
                <input placeholder='Add Another Item'></input>

                <button> Add </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemFromRedux: state
    }
}

export default connect(
    mapStateToProps,
    { }
)(TodoList)