import { FlexContainer } from "@/components/common/container/FlexContainer"
import { ServiceCard } from "@/components/common/card/ServiceCard"

export const CardSection = (): JSX.Element => {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <FlexContainer tag="div" styles={'flex-row gap-8 justify-between items-center px-16'}>
                <ServiceCard description={'Lorem Ipsum Sylum'} />
                <ServiceCard description={'Lorem Ipsum Sylum'} />
                <ServiceCard description={'Lorem Ipsum Sylum'} />
            </FlexContainer>
        </div>
    )
}


