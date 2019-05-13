const ADD_TODO = "ADD_TODO";

const REMOVE_TODO = "REMOVE_TODO";

const TOGGLE_TODO = "TOGGLE_TODO";



export const addTodo = newItem => {
  return {
    type: ADD_TODO,
    payload: newItem
  };
};

export const removeTodo = loseItem => {
    return {
      type: REMOVE_TODO,
      payload: loseItem
    };
  };

  export const toggleTodo = selectedItem => {
    return {
      type: TOGGLE_TODO,
      payload: selectedItem
    };
  };
  