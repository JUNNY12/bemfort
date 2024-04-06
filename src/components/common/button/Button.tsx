import React from "react"
import ButtonProps from "./ButtonProps"
import { ButtonVariant } from "./ButtonProps"


const Button: React.FC<ButtonProps> = (props) => {

  const getVariant = (variant: ButtonVariant): string => {
    switch (variant) {
      case 'purple':
        return 'bg-purple text-white'
      case 'green':
        return 'bg-green text-white'
      default:
        return ''
    }
  }

  return (
    <button
      onClick={props?.handleClick}
      className={`inline-block font-semibold px-4 py-2 rounded ${getVariant(props.variant || '' || undefined)} ${props.styles || ''}`}
      type={props?.type}
      title={props.title}
      disabled={props?.disabled}
      aria-label={props?.ariaLabel}
      role={props?.role}
      aria-labelledby={props?.ariaLabelledby}
    >
      {props.text || props.children}
    </button>
  )
}

export default Button
