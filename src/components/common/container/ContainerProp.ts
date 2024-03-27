interface ContainerProps {
    tag?:'div' | 'section' | 'span' | 'main' | 'p'
    ariaLabel?:string;
    arialLabelledby?:string;
    role?:string;
    title?:string;
    styles?:string;
    children: React.ReactNode;
}

export default ContainerProps
