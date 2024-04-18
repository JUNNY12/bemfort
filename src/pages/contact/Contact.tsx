import { Container } from "@/components/common/container/Container"
import Jumbotron from "@/components/common/jumbotron/Jumbotron"
import { ContactForm } from "@/components/specific/Contact/ContactForm"
import { TopHeader } from "@/components/specific/Contact/TopHeader"

export default function Contact(): JSX.Element {
    return (
        <>
            <Container tag="section" >
                <Jumbotron backgroundImg={'bg-contact-hero'} />
                <TopHeader />
                <ContactForm />
            </Container>
        </>
    )
}