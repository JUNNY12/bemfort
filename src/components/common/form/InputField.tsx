import { InputProps } from "./InputProps"

export const InputField: React.FC<InputProps> = ({ label, name, type, placeholder, value, error, disabled, onChange, labelStyles, inputStyles }) => {
    return (
        <div>
            <label htmlFor={name} className={`mb-2 block ${labelStyles}`}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={` rounded-md ${inputStyles}`}
            />
            {error && <p className="">Input filed can't be empty!</p>}
        </div>
    )
}