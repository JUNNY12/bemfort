
type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  handleClick: () => void;
  ariaLabel?: string;
  role?: string;
  ariaLabelledby?: string;
  title?: string;
  disabled?: boolean;
  styles?: string;
  type?: ButtonType;
  children?: React.ReactNode;
}

export default ButtonProps