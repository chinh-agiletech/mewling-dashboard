import React from "react";

interface TextCustomProps {
    className?: string;
    text?: string;
    children?: React.ReactNode;
}

const TextCustom: React.FC<TextCustomProps> = ({ className, text, children }) => {
    return (
        <p className={className}>
            {text || children}
        </p>
    );
};

export default TextCustom;
