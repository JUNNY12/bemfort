import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"
import { TeamCard } from "@/components/common/card/TeamCard"

export const Team = (): JSX.Element => {
    return (
        <Container tag="section" styles={'bg-taint-white px-16 mt-36 pt-16 pb-32 relative'}>

            <div className=" absolute top-0 right-0">
                <img
                    src={'/assets/images/leafBg.svg'}
                    alt={'Choose Us'}
                    className=""
                />
            </div>
            <div className=" absolute bottom-0 left-0">
                <img
                    src={'/assets/images/leafBg.svg'}
                    alt={'Choose Us'}
                    className=""
                />
            </div>
            <div className="absolute left-1/2 top-[30%] transform -translate-x-1/2 -translate-y-1/2">
                <img
                    src={'/assets/images/leafBg.svg'}
                    alt={'Choose Us'}
                    className=""
                />
            </div>

            <div className={''}>
                <img
                    src={'/assets/images/Arrow3.svg'}
                    alt={'Choose Us'}
                    className=" w-[100px] h-[100px]  absolute top-0 left-0"
                />
            </div>
            <Container tag="div" styles={'mt-12'}>
                <Typography
                    variant="h3"
                    styles={'text-2xl mb-3 text-neutral-col-600 border-b-2 border-neutral-col-600 w-full max-w-[240px] font-semibold font-roboto'}>
                    Our Team Memebers
                </Typography>
                <FlexContainer tag="div" styles={'flex-row gap-16 justify-between mt-8'}>
                    <p className=" text-dark-green text-6xl mb-3 text-left font-roboto-serif font-semibold w-full max-w-[500px]">
                        Professional Team Members
                    </p>
                    <p className=" text-xl text-left mb-3 w-full max-w-[500px] font-roboto-serif">
                        Lorem ipsum dolor sit amet consectetur.
                        Consectetur lobortis in fermentum tortor viverra
                        fermentum tortor viverra.
                    </p>
                </FlexContainer>

            </Container>
            <Container tag="div" styles={' mt-8 grid grid-cols-3 gap-6'}>
                <TeamCard
                    name={'Dr. John Doe'}
                    role={'Cardiologist'}
                    image={'/assets/images/team.jpg'}
                />
                <TeamCard
                    name={'Dr. John Doe'}
                    role={'Cardiologist'}
                    image={'/assets/images/team.jpg'}
                />
                <TeamCard
                    name={'Dr. John Doe'}
                    role={'Cardiologist'}
                    image={'/assets/images/team.jpg'}
                />
            </Container>
        </Container>
    )
}