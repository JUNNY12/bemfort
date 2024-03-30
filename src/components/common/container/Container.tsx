import ContainerProps from "./ContainerProp"

export const Container: React.FC<ContainerProps> = (props) => {
    const Tag = props.tag as keyof JSX.IntrinsicElements
    return (
        <Tag
            aria-label={props.ariaLabel}
            aria-labelledby={props.arialLabelledby}
            title={props.title}
            role={props.role}
            className={`${props.styles}`}
        >
            {props.children}
        </Tag>
    )
}