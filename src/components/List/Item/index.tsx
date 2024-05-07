import { ITask } from "../../../types";
import style from "./Item.module.css";
export default function item({ name, time, selected, completed, id }: ITask) {
  return (
    <li className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
