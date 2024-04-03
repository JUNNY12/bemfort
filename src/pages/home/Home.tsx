import { Container } from "@/components/common/container/Container"
import { HomeHero } from "@/components/specific/Home/HomeHero"
import { ChooseUs } from "@/components/specific/Home/ChooseUs"
import { WhyChooseUs } from "@/components/specific/Home/WhyChooseUs"
import { Team } from "@/components/specific/Home/Team"

export default function Home(): JSX.Element {
    return (
        <Container tag="section">
            <HomeHero />
            <ChooseUs />
            <WhyChooseUs />
            <Team />
        </Container>
    )
} 
