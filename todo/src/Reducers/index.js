import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../Actions';

const initialState = {
    todos: [
        {todo: 'Start a revolution', status: false, id:12345},
        {todo: 'Save humanity', status: false, id:54321}
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

        case TOGGLE_TODO:
        return {
            ...state, 
            todos: state.todos.map ( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, 
                        status: !todo.status
                    };
                }
                return todo;
            })
        }; 

        default: 
        return state;
    }
}