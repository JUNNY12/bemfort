interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    styles?: string;
    ariaLabel?: string;
    role?: string;
    title?: string;
    children: React.ReactNode;
}

export default TypographyProps