import Button from "@/components/common/button/Button"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"
import { NavLink } from "react-router-dom"

export const NoMatch: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'p-16 lg:p-8 sm:!p-4 bg-gradient-to-r from-light-green to-light-yellow w-screen h-screen font-roboto-serif'}>
            <FlexContainer tag="div" styles="justify-center items-center bg-taint-white flex-col h-full p-16 lg:p-8 sm:!p-4 text-center">

                <Container tag="div" styles={'bg-gradient-to-tr from-green to-light-yellow text-transparent bg-clip-text animate-bounce'}>
                    <Typography variant="h1" styles="text-9xl sm:text-7xl font-bold mb-3 text-center">
                        404
                    </Typography>
                </Container>
                <p className="text-2xl sm:!text-xl uppercase font-bold font-roboto-serif text-neutral-col-600">
                    OOPS!!! Page Not Found
                </p>

                <p className="mb-3 text-neutral-col-600 text-xl sm:text-lg max-w-[500px] sm:w-full">
                    Sorry, the page you are looking for does not exist.
                </p>

                <NavLink to="/">
                    <Button text="Go Back Home" styles={'rounded-[40px] border-2 border-green text-green hover:bg-green hover:text-white ease-in-out duration-500  py-3 px-6'} />
                </NavLink>

            </FlexContainer>
        </Container>
    )
}