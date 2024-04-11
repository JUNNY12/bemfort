import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import SupportLineCard from "@/components/shared/SupportLineCard"
import { InputField } from "@/components/common/form/InputField"
import useFormData from "@/hooks/useFormData"
import { TextField } from "@/components/common/form/TextField"
import Button from "@/components/common/button/Button"

export const ContactForm: React.FC = (): JSX.Element => {
    const { formData, handleChange, resetFormData } = useFormData({
        name: '',
        phoneNumber: '',
        subject: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        resetFormData()
    }

    return (
        <Container tag='section' styles={'relative bg-center bg-contact-section bg-cover w-full h-full'}>
            <SupportLineCard styles={"absolute -top-20 border border-purple left-1/2 translate-x-[-50%]"} />
            <FlexContainer tag="div" styles={'w-full h-full justify-center items-center text-white font-roboto-serif bg-neutral-col-300'} >
                <form action="" onSubmit={handleSubmit} className=" mt-32 mb-16 px-16">
                    <Container tag="div" styles={'grid grid-cols-2 gap-6 mb-6'}>
                        <InputField
                            value={formData.name}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Your Name"
                            name="name"
                            inputStyles="min-w-[450px] placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.email}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Email Address"
                            name="email"
                            inputStyles="min-w-[450px] placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Phone Number"
                            name="phoneNumber"
                            inputStyles="min-w-[450px] placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                        <InputField
                            value={formData.subject}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Subject"
                            name="subject"
                            inputStyles="min-w-[450px] placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                        />
                    </Container>
                    <TextField
                        value={formData.message}
                        onChange={handleChange}
                        labelStyles={'text-base'}
                        rows={10}
                        name="message"
                        placeholder="Your message here"
                        inputStyles="w-full mt-2 px-4 placeholder:text-xl placeholder:font-roboto-serif text-black py-2 border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-300"
                    />

                    <FlexContainer tag="div" styles="justify-center mt-6 font-roboto-serif">
                        <Button variant="green" styles={'w-72 h-[45px] py-3'} text="Send a Message" />
                    </FlexContainer>
                </form>

            </FlexContainer>

        </Container>
    )
}
