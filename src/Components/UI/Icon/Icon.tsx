import React from "react";

interface IconProps {
  className?: string;
  icon?: React.ReactNode; // dùng khi truyền vào 1 component icon (SVG, React component...)
  image?: string; // dùng khi truyền vào path ảnh
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ className, icon, image, alt }) => {
  return (
    <div className={className}>
      {icon ? (
        icon
      ) : image ? (
        <img src={image} alt={alt || "icon"} />
      ) : null}
    </div>
  );
};

export default Icon;
