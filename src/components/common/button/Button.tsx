import React from "react";
import ButtonProps from "./ButtonProps";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props?.handleClick}
      className={`${props.styles || ''}`}
      type={props?.type}
      title={props.title}
      disabled={props?.disabled}
      aria-label={props?.ariaLabel}
      role={props?.role}
      aria-labelledby={props?.ariaLabelledby}
    >
      {props.children}
    </button>
  )
}

export default Button
