import { FlexContainer } from "../container/FlexContainer"
import { Container } from "../container/Container"
import Typography from "../typography/Typography"
import { useGetPathName } from "@/hooks/useGetPathName"
import { COMPANY_NAME } from "@/constants/constants"
import { useEffect, useState } from "react"

interface JumbotronProps {
}

export default function Jumbotron(): JSX.Element {
  const { pathName, userPage } = useGetPathName()
  const [backgroundImg, setBackgroundImg] = useState("");

  useEffect(() => {
    if(userPage){
    switch (userPage) {
      case 'about':
        setBackgroundImg('about-hero')
      break;
      case 'services':
        setBackgroundImg('services')
      break;
      case 'product':
        setBackgroundImg('products-hero')
      break;
      case 'careers':
        
      break;
    
      default :
  
      break;
    }
  }
  }, [userPage])
  

  return (
    <Container tag="section" styles={`h-[592px] bg-green-alt bg-${backgroundImg} bg-cover bg-center w-full`}>
      <FlexContainer tag="div" styles={'w-full h-full text-white font-roboto-serif --bg-neutral-col-600 justify-center flex-col items-center'}>
        <Typography variant="h1" styles={'capitalize text-6xl mb-3 font-bold'}>
          {userPage}
        </Typography>
        <Typography variant="h3" styles={'capitalize text-3xl font-semibold'}>
          {`${COMPANY_NAME} ${pathName}`}
        </Typography>
      </FlexContainer>
    </Container>
  )
}
