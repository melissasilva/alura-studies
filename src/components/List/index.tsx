import { ITask } from "../../types";
import Item from "./Item";
import style from "./List.module.scss";

interface IListProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export default function List({ tasks, selectTask }: IListProps) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item selectTask={selectTask} key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}
