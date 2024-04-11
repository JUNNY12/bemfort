import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"
import { FlexContainer } from "@/components/common/container/FlexContainer"

export const TopHeader: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'p-16 mb-16'}>
            <FlexContainer tag="div" styles="justify-between items-center flex-col">
                <Typography variant="h1" styles="text-6xl font-regular font-roboto-serif max-w-[550px] mb-3 text-center">
                    Please Don't Hesitate To Contact Us
                </Typography>
                <p className="text-2xl font-roboto-serif text-neutral-700">
                    You can also reach out to us by phone or email are many variations
                </p>
            </FlexContainer>
        </Container>
    )
}