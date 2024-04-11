import React from "react"
import { Link } from "react-router-dom"
import Typography from "../typography/Typography"
import { Container } from "../container/Container"



const CardWrapper: React.FC<{ styles?: string, children: React.ReactNode }> = ({ children, styles }) => {
    return <Container tag="div" styles={styles}>{children}</Container>
}

const CardIcon: React.FC<{ icon?: string, altText?: string, styles?: string }> = ({ icon, altText, styles }) => {
    return <img src={icon} alt={altText} className={styles} />
}

const CardTitle: React.FC<{ styles?: string, children: React.ReactNode }> = ({ children, styles }) => {
    return <Typography variant="h2" styles={styles}>{children}</Typography>
}

const CardSubtitle: React.FC<{ styles?: string, children: React.ReactNode }> = ({ children, styles }) => {
    return <Typography variant="h3" styles={styles}>{children}</Typography>
}


const CardDescription: React.FC<{ styles?: string, children: React.ReactNode }> = ({ children, styles }) => {
    return <p className={`${styles}`}>{children}</p>
}

const CardLink: React.FC<{ styles?: string, children: React.ReactNode, linkRoute: string, linkText: string }> = ({ children, styles, linkRoute }) => {
    return <Link to={linkRoute} className={`${styles}`}>{children}</Link>
}



export const Card = ({ children }: React.PropsWithChildren, style?:string): JSX.Element => {
    return <Container tag="article" styles={style}>{children}</Container>
}

Card.CardWrapper = CardWrapper
Card.CardIcon = CardIcon
Card.CardTitle = CardTitle
Card.CardDescription = CardDescription
Card.CardLink = CardLink
Card.CardSubtitle = CardSubtitle

