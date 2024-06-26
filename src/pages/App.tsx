import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { ITask } from "../types";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask): void {
    setSelected(selectedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} />
    </div>
  );
}

export default App;
