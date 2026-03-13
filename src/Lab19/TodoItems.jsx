// • Write a program which Add, toggle, and remove todo items using reducer. (A)
import { useReducer } from "react";


const TodoItems = () => {
  const [todos, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { id: Date.now(), text: action.text, completed: false }];
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      case 'REMOVE_TODO':
        return state.filter(todo => todo.id !== action.id);
      default:
        return state;
    }
  }, []);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <div>
      <h2>Todo Items</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};
export default TodoItems;