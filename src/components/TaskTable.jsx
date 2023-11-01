import React from "react";
import TaskRow from "./TaskRow.jsx";

function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  // filtro de tareas hechas
  const tasksTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  // renderizado de filas de la tabla de tareas
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>tareas</th>
        </tr>
      </thead>
      <tbody>{tasksTableRows(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
