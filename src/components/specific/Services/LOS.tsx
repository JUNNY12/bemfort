// LOS => list of services

import { ServiceCardType2 } from "@/components/common/card/ServiceCardType2";
import { FlexContainer } from "@/components/common/container/FlexContainer";



export default function LOS() {
  const data = [
    {
      title : "Lorem Ipsum dolor",
      desc : "Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis.",
      link: "/home",
    },
    {
      title : "Lorem Ipsum dolor",
      desc : "Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis.",
      link: "/home",
    },
    {
      title : "Lorem Ipsum dolor",
      desc : "Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis.",
      link: "/home",
    },
    {
      title : "Lorem Ipsum dolor",
      desc : "Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis.",
      link: "/home",
    },
    {
      title : "Lorem Ipsum dolor",
      desc : "Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis.",
      link: "/home",
    },
    {
      title : "Lorem Ipsum dolor",
      desc : "Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis.",
      link: "/home",
    }

  ]
  return (
    <FlexContainer tag="div" styles="[&>article]:mb-[16px] [&>article]:overflow-hidden [&>article]:border [&>article]:rounded-md [&>*:nth-child(odd)]:border-[transparent] [&>*:nth-child(even)]:border-green p-[64px] flex-wrap justify-between"> 
      { 
        data.map((info, i) => (
          <ServiceCardType2 title={info.title} description={info.desc} linkTo={info.link}  index={i.toString().length < 2 ? "0" + (i+1) : (i+1)}/>
          
        ))
      }
    </FlexContainer>
  )
}
