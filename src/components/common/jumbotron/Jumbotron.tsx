import { FlexContainer } from "../container/FlexContainer"
import { Container } from "../container/Container"
import Typography from "../typography/Typography"
import { useGetPathName } from "@/hooks/useGetPathName"
import { COMPANY_NAME } from "@/constants/constants"

interface JumbotronProps {
  backgroundImg: string
}

export default function Jumbotron({ backgroundImg }: JumbotronProps): JSX.Element {
  const { pathName, userPage } = useGetPathName()
  return (
    <Container tag="section" styles={`h-[592px] tablet:!h-[400px] ${backgroundImg} bg-cover bg-center w-full `}>
      <FlexContainer tag="div" styles={'w-full h-full text-white font-roboto-serif bg-neutral-col-600 justify-center flex-col items-center px-16 lg:px-8 tablet:!px-4 text-center'}>
        <Typography variant="h1" styles={'capitalize text-6xl sm:text-4xl mb-3 font-bold'}>
          {userPage}
        </Typography>
        <Typography variant="h3" styles={'capitalize text-3xl sm:text-xl font-semibold'}>
          {`${COMPANY_NAME} ${pathName}`}
        </Typography>
      </FlexContainer>
    </Container>
  )
}
