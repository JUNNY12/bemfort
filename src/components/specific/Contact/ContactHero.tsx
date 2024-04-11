import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import { useGetPathName } from "@/hooks/useGetPathName"
import { COMPANY_NAME } from "@/constants/constants"
import Typography from "@/components/common/typography/Typography"


export const ContactHero: React.FC = (): JSX.Element => {
    const pathName = useGetPathName()
    return (
        <Container tag="section" styles={'h-screen bg-contact-hero bg-cover w-full'}>
            <FlexContainer tag="div" styles={'w-full h-full text-white font-roboto-serif bg-neutral-col-600 justify-center flex-col items-center'}>
                <Typography variant="h1" styles={'text-6xl mb-3 font-bold'}>
                    Contact
                </Typography>
                <Typography variant="h3" styles={'text-3xl font-semibold'}>
                    {`${COMPANY_NAME} ${pathName}`}
                </Typography>
            </FlexContainer>
        </Container>
    )
}