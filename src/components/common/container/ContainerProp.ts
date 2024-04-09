interface ContainerProps {
    tag:'div' | 'section' | 'span' | 'main' | 'p' | 'article'
    ariaLabel?:string;
    arialLabelledby?:string;
    role?:string;
    title?:string;
    styles?:string;
    children: React.ReactNode;
    className?:string;
}

export default ContainerProps
