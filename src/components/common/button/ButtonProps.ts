
type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type ButtonVariant = 'purple' | 'green' | undefined

interface ButtonProps {
  handleClick?: () => void;
  ariaLabel?: string;
  role?: string;
  ariaLabelledby?: string;
  title?: string;
  text: string;
  disabled?: boolean;
  styles?: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

export default ButtonProps