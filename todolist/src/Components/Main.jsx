import React, { useState } from "react";
import Header from "./Header";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState([]);

  // Add Todo to the list

  function addItem() {
    setData([...data, { todo, time }]);
    setTodo("");
    setTime("");
  }

  return (
    <div className="main">
      <div className="inputs">
        <input
          type="text"
          className="form-control"
          placeholder="Enter what to do"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter when to do"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <button onClick={addItem} type="button" className="btn btn-success">
          Add
        </button>
      </div>
      <div className="container">
        <h6>Sl No.</h6>
        <h6>ToDo</h6>
        <h6>Time</h6>
        <h6>Remove</h6>
      </div>
      {data.map((element, index) => {
        return (
          <Header slno={index + 1} todo={element.todo} time={element.time} />
        );
      })}
    </div>
  );
};

export default Main;
