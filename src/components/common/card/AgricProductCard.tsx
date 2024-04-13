import { Link } from "react-router-dom"
import { Container } from "../container/Container"
import { FlexContainer } from "../container/FlexContainer"
import { Card } from "./Card"
import Typography from "../typography/Typography"


interface APCardProps {
    index?: number | string
    title?: string
    description?: string
    linkTo: string
}

export default function AgricProductCard({ index, title, description, linkTo } : APCardProps) {
  return (
        <Card>
            <Card.CardWrapper styles={'bg-white border-b-2 border-b-black/20 w-full lg:w-[100%] flex flex-col h-[auto] '}>
                <Link to={linkTo} className="flex pb-4">
                    <Container tag="div" styles={'bg-light-yellow p-6 relative h-20 w-20'}>
                        <Card.CardIcon icon={'/assets/images/healthicons_fruits.svg'} styles={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} />
                    </Container>
                    <FlexContainer tag="div" styles="flex-col font-bold ml-4">
                        <Card.CardTitle styles="text-bold mb-3">
                            {title}
                        </Card.CardTitle>
                        <Card.CardDescription styles={'font-semibold text-sm'}>
                            {description}
                        </Card.CardDescription>
                    </FlexContainer>
                </Link>
            </Card.CardWrapper>
        </Card>
  )
}