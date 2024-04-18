import { LOS_DATA } from "@/constants/constants"
import { ServiceCardType2 } from "@/components/shared/ServiceCardType2"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import { JackInTheBox } from "react-awesome-reveal"


export default function LOS() {

  return (
    <FlexContainer tag="div" styles={'grid grid-cols-3 lg:grid-cols-2 mobile-big:grid-cols-1 gap-6 mx-16 lg:mx-8 tablet:!mx-4 my-16'}>
      {
        LOS_DATA.map((info, i) => (
          <JackInTheBox key={i} cascade damping={0.2} duration={1500}>
            <ServiceCardType2
              title={info.title}
              description={info.desc}
              linkTo={info.link}
            />
          </JackInTheBox>
        ))
      }
    </FlexContainer>
  )
}
