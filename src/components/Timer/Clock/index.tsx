import React from "react";
import style from "./Clock.module.scss";

interface IClockProps {
  time: number | undefined;
}

export default function Clock({ time = 0 }: IClockProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [firstMinute, secondMinute] = String(minutes).padStart(2, "0");
  const [firstSecond, secondSecond] = String(seconds).padStart(2, "0");

  return (
    /**Uma outra opção para criar um elemento pai, que é obrigatório, é abrindo uma tag vazia <> & </> */
    <React.Fragment>
      <span className={style.numberClock}>{firstMinute}</span>
      <span className={style.numberClock}>{secondMinute}</span>
      <span className={style.divClock}>:</span>
      <span className={style.numberClock}>{firstSecond}</span>
      <span className={style.numberClock}>{secondSecond}</span>
    </React.Fragment>
  );
}
