import React from "react";
import { ITask } from "../../types";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    name: "",
    time: "00:00",
  };

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo </label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.name}
            onChange={(event) =>
              this.setState({ ...this.state, name: event.target.value })
            }
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step={1}
            name="time"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="time"
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        <Button name="Adicionar" type="submit" />
      </form>
    );
  }

  addTask(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [...oldTasks, { ...this.state }]);
  }
}

export default Form;
