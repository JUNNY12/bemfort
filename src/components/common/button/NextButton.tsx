import React from "react"

interface NextButtonProps {
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const NextButton: React.FC<NextButtonProps> = ({ className, style, onClick, children }) => {
    return (
        <button
            className={className}
            style={{ ...style, display: "block", background: "", position: "absolute", top: "50%", right: "40px", zIndex: 1 }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default NextButton
