import Button from "@/components/common/button/Button"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"

export const CareerApply: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'mx-16 font-roboto-serif mb-44'}>
            <FlexContainer tag="div" styles={'p-8 font-roboto-serif bg-light-green justify-center items-center gap-16'}>
                <Typography variant="h4" styles={'text-3xl text-green font-semibold  mb-3'}>Send us your CV today</Typography>
                <Button text="Apply Now" variant="green" styles={'w-44'} />
            </FlexContainer>
        </Container>
    )
}