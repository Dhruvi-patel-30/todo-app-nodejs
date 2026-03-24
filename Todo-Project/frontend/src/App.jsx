import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>TODO APP</h1>

      <AddTask onAdd={() => setRefresh(!refresh)} />

      <br />
      <hr />

      <TaskList refresh={refresh} />
    </div>
  );
};

export default App;
