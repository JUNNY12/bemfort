import { Container } from "@/components/common/container/Container"
import { ApplyForm } from "@/components/specific/Apply/ApplyForm"
import { CareerHero } from "@/components/specific/Career/CareerHero"

export default function Apply(): JSX.Element {
    return (
        <Container tag="section">
            <CareerHero />
            <ApplyForm />
        </Container>
    )
}