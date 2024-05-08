import { ITask } from "../../../types";
import style from "./Item.module.css";

interface IItemProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function item({
  name,
  time,
  selected,
  completed,
  id,
  selectTask,
}: IItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""}`}
      onClick={() => selectTask({ name, time, selected, completed, id })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
