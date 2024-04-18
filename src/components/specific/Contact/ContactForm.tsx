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
            <SupportLineCard styles={"lg:gap-5 absolute lg:relative -top-20 lg:top-0 left-1/2 lg:left-0 translate-x-[-50%] lg:translate-x-0 lg:!rounded-none lg:w-full tablet:flex-col z-[20]"} />
            <Container tag="div" styles={'w-full h-full text-white font-roboto-serif bg-black/20 backdrop-brightness-50'} >
                <form action="" onSubmit={handleSubmit} className=" mx-16 lg:mx-8 md:!mx-4 pt-36">
                    <Container tag="div" styles={'grid grid-cols-2 md:grid-cols-1 gap-6'}>
                        <InputField
                            value={formData.name}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Your Name"
                            name="name"
                            inputStyles="w-full placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-500"
                        />

                        <InputField
                            value={formData.email}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Email Address"
                            name="email"
                            inputStyles="w-full placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-500"
                        />
                        <InputField
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Phone Number"
                            name="phoneNumber"
                            inputStyles="w-full placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-500"
                        />
                        <InputField
                            value={formData.subject}
                            onChange={handleChange}
                            labelStyles={'text-base'}
                            placeholder="Subject"
                            name="subject"
                            inputStyles="w-full placeholder:text-xl placeholder:font-roboto-serif text-black px-4 py-2 h-[45px] border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-500"
                        />
                    </Container>
                    <TextField
                        value={formData.message}
                        onChange={handleChange}
                        labelStyles={'text-base'}
                        rows={10}
                        name="message"
                        placeholder="Your message here"
                        inputStyles="w-full h-[350px] mt-4 px-4 placeholder:text-xl placeholder:font-roboto-serif text-black py-2 border-[1.5px] border-neutral-col-400 focus:border-2 focus:outline-none focus:border-dark-green transition-colors duration-500"
                    />

                    <FlexContainer tag="div" styles="justify-center mt-6 pb-16 font-roboto-serif">
                        <Button variant="green" styles={'w-72 hover:shadow-umbra ease-in-out duration-500 py-2 '} text="Send a Message" />
                    </FlexContainer>
                </form>

            </Container>
        </Container>
    )
}
