import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"
import { ServiceCard } from "@/components/shared/ServiceCard"

export const AboutWho: React.FC = (): JSX.Element => {
    return (
        <FlexContainer tag="section" styles="gap-28 px-16 pt-16">
            <Container tag="div" styles={'w-2/5'}>
                <div className="relative ">
                    <img src="/assets/images/bigAbout.svg" className=" w-full h-full" alt="" />
                    <img src="/assets/images/smallAbout.svg" className="absolute -bottom-12 -right-24 z-10 w-[300px]" alt="" />
                </div>
            </Container>
            <Container tag="div" styles={'w-3/5'}>
                <Typography
                    variant="h3"
                    styles={'text-2xl mb-3 text-neutral-col-600 border-b-2 border-neutral-col-600 max-w-[150px] font-semibold font-roboto'}>
                    Who We Are
                </Typography>
                <p className=" text-dark-green text-6xl mb-3 text-justify font-roboto-serif font-semibold">
                    Our Farmland and Who we are
                </p>

                <p className=" text-base text-justify mb-3 font-roboto">
                    Lorem ipsum dolor sit amet consectetur. Consectetur
                    lobortis in fermentum tortor viverra volutpat posuere
                    ipsum. Vel massa adipiscing
                    mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                </p>

                <p className=" text-base mb-3 text-justify font-roboto">
                    Lorem ipsum dolor sit amet consectetur. Consectetur
                    lobortis in fermentum tortor viverra volutpat posuere
                    ipsum. Vel massa adipiscing
                    mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                </p>
                <FlexContainer tag="div" styles={'justify-between mt-6'}>
                    <ServiceCard cardWrapperStyles={' w-[300px] p-4'} descriptionStyles={'text-2xl'} description="Ensure quality standards of service" />
                    <ServiceCard cardWrapperStyles={'w-[300px] p-4'} descriptionStyles={'text-2xl'} description="Organic Food Straight From The Farmer" />
                </FlexContainer>
            </Container>
        </FlexContainer>
    )
}
