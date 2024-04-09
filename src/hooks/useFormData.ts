import { useState } from 'react'
import { ChangeEvent } from 'react'

export interface FormValues {
    [key: string]: string
}

const useFormData = (initialValues: FormValues) => {
    const [formData, setFormData] = useState<FormValues>(initialValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const resetFormData = () => {
        setFormData(initialValues)
    }


    return {
        formData,
        handleChange,
        resetFormData,
        
    }
}

export default useFormData
