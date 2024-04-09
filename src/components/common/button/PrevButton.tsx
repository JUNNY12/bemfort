import React from "react"

interface PrevButtonProps {
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const PrevButton: React.FC<PrevButtonProps> = ({ className, style, onClick, children }) => {
    return (
        <button
            className={className}
            style={{ ...style, display: "block", background: "", position: "absolute", top: "50%", left: "0", zIndex: 1 }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default PrevButton
