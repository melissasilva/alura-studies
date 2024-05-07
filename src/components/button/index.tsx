import React from "react";
import style from './Button.module.scss';

class Button extends React.Component<{ name:string }> {
  render() {
    return (
        <button className={style.button}>
          {this.props.name}
        </button>
    );
  }
}

export default Button;