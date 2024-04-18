import Jumbotron from "@/components/common/jumbotron/Jumbotron"
import LOS from "@/components/specific/Services/LOS"
import { WhatWeOffer } from "@/components/shared/WhatWeOffer"

export default function Services() {
  return (
    <div>
      <Jumbotron backgroundImg="bg-services-hero" />
      <LOS />
      <WhatWeOffer />
    </div>
  )
}
