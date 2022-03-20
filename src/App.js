import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodo("");
  };

  return (
    <div className="App">
      <h3>TODO APP</h3>
      <form action="" type="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="やる事を入力"
          value={todo}
          onChange={(e) => {
            console.log(e.target.value);
            setTodo(e.target.value);
          }}
        />
        <button className="btn">追加</button>
      </form>

      <div className="todo-item">
        <ul className="undone-todo">
          <p>未完了</p>
          <li>1</li>
        </ul>

        <ul className="done-todo">
          <p>完了</p>
          <li>1</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
