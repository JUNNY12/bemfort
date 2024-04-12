import { Container } from "@/components/common/container/Container"
import Jumbotron from "@/components/common/jumbotron/Jumbotron"
import { Team } from "@/components/shared/Team"
import { AboutBenefit } from "@/components/specific/About/AboutBenefits"
// import { AboutHero } from "@/components/specific/About/AboutHero"
// switched to Jumbotron for test
import { AboutWho } from "@/components/specific/About/AboutWho"
export default function About(): JSX.Element {
    return (
        <Container tag="section">
            {/* <AboutHero /> */}
            <Jumbotron />
            <AboutWho />
            <Team />
            <AboutBenefit />
        </Container>
    )
}
