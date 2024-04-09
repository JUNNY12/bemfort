import { Container } from "../common/container/Container"
import { Card } from "../common/card/Card"


interface ServiceCardProps {
    title?: string;
    description?: string;
    descriptionStyles?: string
    cardWrapperStyles?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, cardWrapperStyles, descriptionStyles }): JSX.Element => {

    return (
        <Card>
            <Card.CardWrapper styles={`bg-white bg-leaf-bg bg-no-repeat bg-right-bottom flex justify-center items-center flex-col rounded-md shadow-penumbra ${cardWrapperStyles}`}>
                <Container tag="div" styles={'border-2 border-dark-purple bg-light-yellow rounded-[100%] p-6 relative h-20 w-20 mb-4'}>
                    <Card.CardIcon icon={'/assets/images/healthicons_fruits.svg'} styles={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} />
                </Container>
                <Card.CardTitle>
                    {title}
                </Card.CardTitle>
                <Card.CardDescription styles={`text-center font-semibold ${descriptionStyles}`}>
                    {description}
                </Card.CardDescription>
            </Card.CardWrapper>
        </Card >
    )
}