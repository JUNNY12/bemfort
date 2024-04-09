import { Container } from "@/components/common/container/Container"
import { CareerApply } from "@/components/specific/Career/CareerApply"
import CareerCarousel from "@/components/specific/Career/CareerCarousel"
import { CareerHero } from "@/components/specific/Career/CareerHero"
import { CareerOppurtunities } from "@/components/specific/Career/CareerOppurtunities"
export default function Career(): JSX.Element {
    return (
        <Container tag="section">
            <CareerHero />
            <CareerCarousel />
            <CareerOppurtunities />
            <CareerApply />
        </Container>
    )
}