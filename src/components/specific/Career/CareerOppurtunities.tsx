import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"

export const CareerOppurtunities: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'mx-16 lg:mx-8 md:!mx-4 mb-16 lg:mb-8 font-roboto-serif'}>
            <Typography variant="h1" styles={'text-4xl md:text-[32px] border-b border-black w-[280px]  md:w-[250px] mb-3'}>
                Available Positions
            </Typography>
            <p className="text-2xl md:text-xl">No available position, check  back Later</p>
        </Container>
    )
}