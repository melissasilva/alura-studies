import style from "./Item.module.css";
export default function item({ name, time }: { name: string; time: string }) {
  return (
    <li className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
