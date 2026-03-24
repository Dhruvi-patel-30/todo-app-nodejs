import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching tasks");
    }
  };

  useEffect(() => {
    fetchTask();
  }, [refresh]);

  // complete task
  const completeTask = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, {
        completed: true,
      });
      fetchTask();
    } catch (error) {
      console.log(error);
      alert("Error completing task");
    }
  };

  //delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTask();
    } catch (error) {
      console.log(error);
      alert("Error deleting task");
    }
  };

  return (
    <div>
      <h2>TaskList</h2>

      {tasks.map((task) => (
        <div key={task._id}>
          <h3>
            {task.title} {task.completed ? "(Completed)" : ""}
          </h3>
          <p>{task.description}</p>

          {!task.completed && (
            <button onClick={() => completeTask(task._id)}>Complete</button>
          )}

          <button onClick={() => deleteTask(task._id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
