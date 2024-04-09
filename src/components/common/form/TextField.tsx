/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import { InputProps } from "./InputProps"

interface TextFieldProps extends InputProps {
    rows?: number
    maxLength?: number
    spellCheck?: boolean
    autoComplete?: string
}


export const TextField: React.FC<TextFieldProps> = ({
    label,
    name,
    placeholder,
    value,
    error,
    disabled,
    onChange,
    labelStyles,
    inputStyles,
    rows,
    maxLength,
    spellCheck,
    autoComplete }) => {
    return (
        <div>
            <label htmlFor={name} className={` block mb-2 ${labelStyles}`}>{label}</label>
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`rounded-md ${inputStyles}`}
                rows={rows}
                maxLength={maxLength}
                spellCheck={spellCheck}
                autoComplete={autoComplete}
            />
            {error && <p className="">Text field filed can't be empty!</p>}
        </div>
    )
}
