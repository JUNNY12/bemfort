import { Container } from "@/components/common/container/Container"
import Carousel from "./Carousel"

export const HomeHero: React.FC = () => {
    return (
        <Container tag="section">
            <Carousel />
        </Container>
    )
}