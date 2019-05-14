export const ADD_TODO = "ADD_TODO";

export const REMOVE_TODO = "REMOVE_TODO";

export const TOGGLE_TODO = "TOGGLE_TODO";



export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const removeTodo = newList => {
    return {
      type: REMOVE_TODO,
      payload: newList
    };
  };

  export const toggleTodo = editedList => {
    return {
      type: TOGGLE_TODO,
      payload: editedList
    };
  };
  