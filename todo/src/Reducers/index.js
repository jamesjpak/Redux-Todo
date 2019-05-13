import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../Actions';

const initialState = {
    newItem: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:

        return {
            ...state, 
            newItem: state
        };
        case REMOVE_TODO:

        return {
            ...state, 
            newItem: state
        };
        case TOGGLE_TODO:

        return {
            ...state, 
            newItem: state
        };

        default: 
        return state;
    }
}