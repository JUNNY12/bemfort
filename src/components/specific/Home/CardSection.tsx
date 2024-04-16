import { Container } from "@/components/common/container/Container"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { Fade } from "react-awesome-reveal"
import { SERVICE_DATA } from "@/constants/constants"

export const CardSection = (): JSX.Element => {
    return (
        <div className="absolute z-50 left-1/2 transform -translate-x-1/2 -bottom-20 mobile-big:!relative mobile-big:-mt-16 mobile-big:bottom-0 font-roboto">
            <Container tag="div" styles={'flex justify-between flex-row mobile-big:grid mobile-big:grid-cols-1 gap-8 xmd:gap-4  mx-16 lg:mx-8 tablet:mx-4'}>
                {
                    SERVICE_DATA.map(({ description }, index) => (
                        <Fade key={index} cascade damping={0.2} duration={1000} direction="up">
                            <ServiceCard
                                cardWrapperStyles={'p-6 w-[250px] xmd:w-[200px] mobile-big:min-w-full xmd:p-2 mobile-big:p-4'}
                                description={description} />
                        </Fade>
                    )
                    )
                }
            </Container>
        </div>
    )
}


