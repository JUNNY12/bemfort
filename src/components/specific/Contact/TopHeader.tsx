import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import { Fade } from "react-awesome-reveal"

export const TopHeader: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'mt-16 mb-32 mx-16 lg:mx-8 md:!mx-4'}>
            <FlexContainer tag="div" styles="justify-between items-center flex-col text-center">
                <Fade duration={1000} direction="up">
                    <Typography variant="h1" styles="text-6xl md:text-4xl sm:!text-[28px] font-regular font-roboto-serif max-w-[550px] md:max-w-[400px]  mb-3">
                        Please Don't Hesitate To Contact Us
                    </Typography>
                </Fade>
                <Fade duration={1000} direction="up">
                    <p className="text-2xl md:text-lg font-roboto-serif text-neutral-700">
                        You can also reach out to us by phone or email are many variations
                    </p>
                </Fade>
            </FlexContainer>
        </Container>
    )
}