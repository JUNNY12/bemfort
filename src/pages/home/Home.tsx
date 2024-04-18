import { Container } from "@/components/common/container/Container"
import { HomeHero } from "@/components/specific/Home/HomeHero"
import { ChooseUs } from "@/components/specific/Home/ChooseUs"
import { WhyChooseUs } from "@/components/specific/Home/WhyChooseUs"
import { Team } from "@/components/shared/Team"
import { WhatWeOffer } from "@/components/shared/WhatWeOffer"

export default function Home(): JSX.Element {
    return (
        <Container tag="section">
            <HomeHero />
            <ChooseUs />
            <WhyChooseUs />
            <Container tag="div" styles={'tablet:-mt-12'}>
                <Team />
            </Container>
            <WhatWeOffer />
        </Container>
    )
} 
