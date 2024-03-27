import React from 'react'
import TypographyProps from './TypographyProps'

const Typography: React.FC<TypographyProps> = (props) => {
    const Element = props.variant as keyof JSX.IntrinsicElements

    return (
        <Element
            aria-label={props.ariaLabel}
            role={props.role}
            title={props.title}
            className={`${props.styles || ''}`}>
            {props.children}
        </Element>
    )
}

export default Typography
