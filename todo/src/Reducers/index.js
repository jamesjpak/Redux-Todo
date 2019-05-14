import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../Actions';

const initialState = {
    todos: [
        {todo: 'Start a revolution', status: false},
        {todo: 'Save humanity', status: false}
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        return {
            ...state, 
            todos: [...state.todos, {todo: action.payload, status:false} ]
        };

    //    case REMOVE_TODO:

    //    return {
    //    ...state, 
    //        todos: idk
    //    };
    //    case TOGGLE_TODO:

    //    return {
    //        ...state, 
    //        todos: idk
    //    }; 

        default: 
        return state;
    }
}