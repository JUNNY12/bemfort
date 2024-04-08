import { Container } from "@/components/common/container/Container";
import { FlexContainer } from "@/components/common/container/FlexContainer";
import Jumbotron from "@/components/common/jumbotron/Jumbotron";
import ExploreMore from "@/components/specific/Services/ExploreMore";
import HowWeWork from "@/components/specific/Services/HowWeWork";
import LOS from "@/components/specific/Services/LOS";

export default function Services() {
  return (
    <div>
      <Jumbotron jumboTitle={"Services"} jumboDesc={"Services"}/>
      <LOS/>
      <ExploreMore/>
      <HowWeWork/>
    </div>
  )
}
