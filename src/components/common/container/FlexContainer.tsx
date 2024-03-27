import ContainerProps from "./ContainerProp"

export const FlexContainer: React.FC<ContainerProps> = (props) => {

    const Tag = props.tag as keyof JSX.IntrinsicElements

    return (
        <Tag
            aria-label={props.ariaLabel}
            aria-labelledby={props.arialLabelledby}
            title={props.title}
            role={props.role}
            className={`${props.styles} flex`}
        >
            {props.children}
        </Tag>
    )
}