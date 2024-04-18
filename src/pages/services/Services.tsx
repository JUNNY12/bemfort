import Jumbotron from "@/components/common/jumbotron/Jumbotron"
import LOS from "@/components/specific/Services/LOS"
import { WhatWeOffer } from "@/components/shared/WhatWeOffer"
import { Container } from "@/components/common/container/Container"

export default function Services() {
  return (
    <>
      <Container tag="div">
        <Jumbotron backgroundImg="bg-services-hero" />
        <LOS />
        <WhatWeOffer />
      </Container>
    </>
  )
}
