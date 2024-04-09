import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"

export const CareerOppurtunities: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'px-16 py-12 font-roboto-serif'}>
            <Typography variant="h1" styles={'text-3xl  mb-3'}>
                Available Positions
            </Typography>
            <p className="text-2xl">No available position, check  back Later</p>
        </Container>
    )
}