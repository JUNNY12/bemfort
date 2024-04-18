import Button from "@/components/common/button/Button"
import { Container } from "@/components/common/container/Container"
import { InputField } from "@/components/common/form/InputField"
import { TextField } from "@/components/common/form/TextField"
import Typography from "@/components/common/typography/Typography"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import useFormData from "@/hooks/useFormData"

export const ApplyForm: React.FC = (): JSX.Element => {
    const { formData, handleChange, resetFormData } = useFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        appliedPosition: '',
        earliestPossibleStartDate: '',
        cv: '',
        coverLetter: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        resetFormData()
    }

    return (
        <Container tag="section" styles={'mt-16 lg:mt-8  font-roboto-serif mb-32 lg:mb-0'}>
            <FlexContainer tag="div" styles={'justify-center'}>
                <Typography variant="h1" styles={'text-3xl text-center mb-8 relative border-b pb-2 border-black'}>
                    Apply Now
                </Typography>
            </FlexContainer>
            <Container tag="div" styles={'bg-taint-white p-16 lg:p-8 md:!p-4 lg:!pb-8 font-roboto'}>
                <form onSubmit={handleSubmit} >
                    <Container tag="div" styles={'grid grid-cols-2 md:grid-cols-1 gap-6 mb-6'}>
                        <InputField
                            value={formData.firstName}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            label="First Name"
                            name="firstName"
                            inputStyles="w-full px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.lastName}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            label="Last Name"
                            name="lastName"
                            inputStyles="w-full px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            label="Phone Number"
                            type="tel"
                            name="phoneNumber"
                            inputStyles="w-full px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.email}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            label="Email Address"
                            type="email"
                            name="email"
                            inputStyles="w-full px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.appliedPosition}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            label="Applied Position"
                            name="appliedPosition"
                            inputStyles="w-full px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.earliestPossibleStartDate}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            type="date"
                            name="earliestPossibleStartDate"
                            label="Earliest Possible Start Date"
                            inputStyles="w-full px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.cv}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            type="file"
                            label="Upload CV"
                            name="cv"
                            inputStyles="w-full px-4 py-2 h-[45px] bg-white border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                    </Container>
                    <TextField
                        value={formData.coverLetter}
                        onChange={handleChange}
                        labelStyles={'text-base'}
                        rows={10}
                        name="coverLetter"
                        label="Cover Letter"
                        inputStyles="w-full px-4 py-2 border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                    />
                    <Button text="Submit" type="submit" variant="green" styles={'w-96 md:w-full py-2 mt-6 hover:bg-white hover:text-green hover:border hover:border-green ease-in-out duration-500'} />
                </form>
            </Container>
        </Container>
    )
}