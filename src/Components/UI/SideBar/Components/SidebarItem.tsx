import React from "react";
import Icon from "../../Icon/Icon";
import TextCustom from "../../TextCustom/TextCustom";
import styles from "./index.module.css";

interface SidebarItemProps {
  image: string;
  label: string;
  labelClass?: string; // truyền class tùy chỉnh, nếu có hover sẽ dùng Tailwind class ở đây
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  image,
  label,
  labelClass,
  onClick,
}) => {
  return (
    <div
      className="h-[60px] w-full flex items-center group cursor-pointer"
      onClick={onClick}
    >
      {/* Thanh highlight bên trái */}
      <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Nội dung icon + text */}
      <div className="h-[25px] w-[260px] ml-[38px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
        <div className="h-[25px] w-[25px]">
          <Icon image={image} />
        </div>
        <TextCustom
          className={`${
            labelClass ||
            "text-[var(--neutral-text-slide-bar)] group-hover:text-[var(--blue-border-before)]"
          } text-[18px] font-[500] letter-spacing-[0px] ${
            styles["label-item"]
          }`}
        >
          {label}
        </TextCustom>
      </div>
    </div>
  );
};

export default SidebarItem;
