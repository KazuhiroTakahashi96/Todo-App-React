import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [undoneList, setUndoneList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setUndoneList([todo, ...undoneList]);
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
            // console.log(e.target.value);
            setTodo(e.target.value);
          }}
        />
        <button className="add-btn">追加</button>
      </form>

      <div className="todo-item">
        <ul className="undone-todo">
          <p>やる事リスト</p>
          {undoneList.map((undone) => (
            <li>
              {undone}
              <button
                className="done-btn"
                onClick={() => {
                  setDoneList([undone, ...doneList]);
                }}
              >
                完了
              </button>
            </li>
          ))}
        </ul>

        <ul className="done-todo">
          <p>完了したタスク</p>
          {doneList.map((done) => (
            <li>
              {done}
              <button
                className="undone-btn"
                onClick={() => {
                  // setDoneList([undone])
                }}
              >
                戻す
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  // setDoneList([undone])
                }}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
