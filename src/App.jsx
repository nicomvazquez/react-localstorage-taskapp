import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator.jsx";
import TaskTable from "./components/TaskTable.jsx";

function App() {
  //arreglo de tareas
  const [taskItems, setTaskItems] = useState([]);

  //estado de tareas realizadas
  const [showCompleted, setShowCompeted] = useState(false);

  //agregar tarea al arreglo
  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  //actualizar tarea al arreglo
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  //limpiar las tareas realizadas
  const cleanTask = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
  };

  //traer tareas del localstorage
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  // agrear al localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100">
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
          <input
            type="checkbox"
            onChange={(e) => setShowCompeted(!showCompleted)}
          />{" "}
          <label>tareas realizadas</label> <button className="btn btn-danger btn-sm" onClick={cleanTask}>limpiar tareas</button>
        </div>

        {showCompleted === true && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>
  );
}

export default App;
