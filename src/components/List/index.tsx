import { ITask } from "../../types";
import Item from "./Item";
import style from "./List.module.scss";

export default function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}
