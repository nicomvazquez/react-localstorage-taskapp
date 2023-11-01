import React from "react";
import { useState } from "react";

//formulario que crea la tarea
const TaskCreator = (props) => {
  // estado de tarea
  const [newTask, setNewTask] = useState("");

  // agragrar tarea al localstorage
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-between my-2">
      <div className="">
        <input
          type="text"
          palceholder="nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="">
        <button className="btn btn-primary btn-sm">guardar tarea</button>
      </div>
    </form>
  );
};

export default TaskCreator;
