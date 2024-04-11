import { Container } from "@/components/common/container/Container"
import { Team } from "@/components/shared/Team"
import { AboutBenefit } from "@/components/specific/About/AboutBenefits"
import { AboutHero } from "@/components/specific/About/AboutHero"
import { AboutWho } from "@/components/specific/About/AboutWho"
export default function About(): JSX.Element {
    return (
        <Container tag="section">
            <AboutHero />
            <AboutWho />
            <Team />
            <AboutBenefit />
        </Container>
    )
}
