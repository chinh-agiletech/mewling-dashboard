import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, icon, disabled, className }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
