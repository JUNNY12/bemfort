import Button from "@/components/common/button/Button"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"
import { Fade } from "react-awesome-reveal"
import { NavLink } from "react-router-dom"

export const CareerApply: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'mx-16 lg:mx-8 md:!mx-4 font-roboto-serif mb-44'}>
            <FlexContainer tag="div" styles={'p-8 md:p-4 font-roboto-serif bg-light-green justify-center items-center gap-16 md:flex-col md:gap-4'}>
                <Fade cascade damping={0.2} duration={1000} direction="up">
                    <Typography variant="h4" styles={'text-3xl md:text-2xl text-green font-semibold  mb-3'}>Send us your CV today</Typography>
                </Fade>
                <Fade cascade damping={0.2} duration={1000} direction="up">
                    <NavLink to={`/career/apply`}>
                        <Button title="Apply Now" ariaLabel="apply" text="Apply Now" variant="green" styles={'w-44 hover:bg-white hover:text-green hover:border hover:border-green ease-in-out duration-500'} />
                    </NavLink>
                </Fade>
            </FlexContainer>
        </Container >
    )
}