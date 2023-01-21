import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AddTodoAction(todo));
    event.target.reset();
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Todo"
            className="input"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            <MdOutlineAdd></MdOutlineAdd>
          </button>
        </form>
        <ul className="allToDos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleToDo">
                <span className="todoText">{t.todo}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: "8px 10px",
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "orangered",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  <AiTwotoneDelete></AiTwotoneDelete>
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
