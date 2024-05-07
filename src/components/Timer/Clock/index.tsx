import React from "react";
import style from "./Clock.module.scss";

export default function Clock() {
  return (
    /**Uma outra opção para criar um elemento pai, que é obrigatório, é abrindo uma tag vazia <> & </> */
    <React.Fragment>
      <span className={style.numberClock}>0</span>
      <span className={style.numberClock}>0</span>
      <span className={style.divClock}>:</span>
      <span className={style.numberClock}>0</span>
      <span className={style.numberClock}>0</span>
    </React.Fragment>
  );
}
