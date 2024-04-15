import { Container } from "@/components/common/container/Container"
import { ServiceCard } from "@/components/shared/ServiceCard"

export const CardSection = (): JSX.Element => {
    return (
        <div className="absolute z-50 left-1/2 transform -translate-x-1/2 -bottom-20 mobile-big:!relative mobile-big:-mt-16 mobile-big:bottom-0 font-roboto">
            <Container tag="div" styles={'flex justify-between flex-row mobile-big:grid mobile-big:grid-cols-1 gap-8 xmd:gap-4  mx-16 lg:mx-8 tablet:mx-4'}>
                <ServiceCard cardWrapperStyles={'p-6 w-[250px] xmd:w-[200px] mobile-big:min-w-full xmd:p-2 mobile-big:p-4'} description={'Lorem Ipsum Sylum'} />
                <ServiceCard cardWrapperStyles={'p-6 w-[250px] xmd:w-[200px] mobile-big:min-w-full xmd:p-2 mobile-big:p-4'} description={'Lorem Ipsum Sylum'} />
                <ServiceCard cardWrapperStyles={'p-6 w-[250px] xmd:w-[200px] mobile-big:min-w-full xmd:p-2 mobile-big:p-4'} description={'Lorem Ipsum Sylum'} />
            </Container>
        </div>
    )
}


