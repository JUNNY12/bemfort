import { Container } from "@/components/common/container/Container"
import Jumbotron from "@/components/common/jumbotron/Jumbotron"
import { ApplyForm } from "@/components/specific/Apply/ApplyForm"

export default function Apply(): JSX.Element {
    return (
        <Container tag="section">
            <Jumbotron backgroundImg={'bg-career-hero'} />
            <ApplyForm />
        </Container>
    )
}