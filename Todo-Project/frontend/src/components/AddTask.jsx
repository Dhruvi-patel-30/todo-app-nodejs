import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/tasks", {
        title,
        description,
      });

      alert("Task Added");

      setTitle("");
      setDescription("");

      if (onAdd) onAdd();
    } catch (error) {
      console.log(error);
      alert("Error adding task");
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        {" "}
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
