/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import { ChangeEvent } from "react"
type InputType = 'password' | 'text' | 'email' | 'number' | 'date' | 'checkbox' | 'radio' | 'file' | 'tel'

export interface InputProps {
    label?: string
    name: string
    type?: InputType
    placeholder?: string
    value?: string | number
    error?:boolean
    disabled?: boolean
    labelStyles?: string
    inputStyles?: string
    onChange?: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}
