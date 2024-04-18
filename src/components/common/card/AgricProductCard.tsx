import { Container } from "../container/Container"
import Typography from "../typography/Typography"

interface APCardProps {
    index?: number | string
    title?: string
    description?: string
    linkTo?: string
}

export default function AgricProductCard({ title, description }: APCardProps) {
    return (
        <Container tag="div" styles={''}>
            <article className=" flex justify-between gap-6 border-b pb-2 border-neutral-col-300">
                <div className=" bg-light-yellow p-10 relative h-20 w-20 mobile-big:h-16 mobile-big:w-16 mobile-big:p-8 mb-4">
                    <img
                        src={'/assets/images/healthicons_fruits.svg'}
                        alt={'service'}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <div>
                    <Typography variant="h3" styles={'text-2xl font-semibold mb-2 mobile-big:text-xl'}>{title}</Typography>
                    <p className=" mb-2 text-base">
                        {description}
                    </p>
                </div>
            </article>
        </Container>
    )
}