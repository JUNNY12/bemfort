import { FlexContainer } from "../container/FlexContainer";
import Typography from "../typography/Typography";
import JumbotronProps from "./JumbotronProps";


export default function Jumbotron(props : JumbotronProps) {
  return (
    <FlexContainer tag={"div"} styles="bg-black text-white h-[592px] items-center justify-center flex-col">
        <Typography variant={"h1"}>
            {props.jumboTitle}
        </Typography>
        <Typography variant={"h3"}>
            Agritech / {props.jumboDesc}
        </Typography>
    </FlexContainer>
  )
}
