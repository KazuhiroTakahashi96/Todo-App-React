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

  // 配列操作
  // https://www.google.com/search?q=js+%E9%85%8D%E5%88%97%E6%93%8D%E4%BD%9C&oq=js+%E9%85%8D%E5%88%97%E6%93%8D%E4%BD%9C&aqs=chrome..69i57.7225j0j7&sourceid=chrome&ie=UTF-8
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
              <p>{undone}</p>
              <button
                className="done-btn"
                onClick={() => {
                  setUndoneList(undoneList.filter((item) => item !== undone));
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
              <p>{done}</p>
              <button
                className="undone-btn"
                onClick={() => {
                  setUndoneList([done, ...undoneList]);
                  setDoneList(doneList.filter((item) => item !== done));
                }}
              >
                戻す
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  setDoneList(doneList.filter((item) => item !== done));
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
