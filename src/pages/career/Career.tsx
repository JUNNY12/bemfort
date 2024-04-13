import { Container } from "@/components/common/container/Container"
import { CareerApply } from "@/components/specific/Career/CareerApply"
import CareerCarousel from "@/components/specific/Career/CareerCarousel"
import { CareerOppurtunities } from "@/components/specific/Career/CareerOppurtunities"
import Jumbotron from "@/components/common/jumbotron/Jumbotron"

export default function Career(): JSX.Element {
    return (
        <Container tag="section">
            <Jumbotron backgroundImg={'bg-career-hero'} />
            <CareerCarousel />
            <CareerOppurtunities />
            <CareerApply />
        </Container>
    )
}