import { useState } from "react";
import "./App.css";
import Task from "./components/task";

function App() {
  const [tasksList, setTaskslist] = useState([]);
  const [task, setTasklist] = useState("");
  function createNewTask(event) {
    setTasklist(event.target.value);
  }

  function addTask(newTask) {
    setTaskslist((prevList) => [...prevList, newTask]);
    setTasklist((prev) => "");
  }

  function clearTaskList() {
    setTaskslist((prevList) => []);
  }
  return (
    <div className="App">
      <div className="btns">
        <input type="text" value={task} onChange={createNewTask} />
        <button onClick={() => addTask(task)}>add new Task</button>
        <button onClick={clearTaskList}>Очистить список задач</button>
      </div>
      {tasksList.map((item, ind) => {
        return <Task key={ind} task={item} />;
      })}
    </div>
  );
}

export default App;
