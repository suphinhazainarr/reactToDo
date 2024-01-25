import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false },
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div key={obj.id} className="todo">
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos((prevToDos) =>
                    prevToDos.map((todo) =>
                      todo.id === obj.id
                        ? { ...todo, status: e.target.checked }
                        : todo
                    )
                  );
                }}
                checked={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
        {toDos.map((obj) => {
          if (obj.status) {
            return <h1 key={obj.id}>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;

