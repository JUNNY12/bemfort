import { FlexContainer } from "../container/FlexContainer";
import Typography from "../typography/Typography";
import { useLocation } from "react-router-dom";

export default function Jumbotron() {
  const userPage = useLocation().pathname.split('/');
  const jumboTitleDesc = userPage[1];
  return (
    <FlexContainer tag={"div"} styles="bg-black text-white h-[592px] items-center justify-center flex-col">
        <Typography variant={"h1"} styles="capitalize">
            {jumboTitleDesc}
        </Typography>
        <Typography variant={"h3"} styles="capitalize">
            Agritech / {jumboTitleDesc}
        </Typography>
    </FlexContainer>
  )
}
