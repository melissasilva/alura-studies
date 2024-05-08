import { useEffect, useState } from "react";
import timeToSeconds from "../../common/utils/time";
import { ITask } from "../../types";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface ITimerProps {
  selected: ITask | undefined;
}

export default function Timer({ selected }: ITimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time));
  }, [selected]);

  function countDown(time: number = 0): void {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        return countDown(time - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button name="Começar!" onClick={() => countDown(time)} />
    </div>
  );
}
