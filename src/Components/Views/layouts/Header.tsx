import React from "react";
import Icon from "@/Components/UI/Icon/Icon";
import Button from "@/Components/UI/Button/Button";

const Header: React.FC = () => {
  return (
    <div className="w-[1140px] h-[64px] ">
      <div className="absolute w-[1140px] h-[64px] border-b-[1px] border-b-[var(--blue-border)]">
        <div className=""></div>
        <Icon
        className="w-[167px] h-[40px] rouned-full"
        image={"./mewling-logo.png"}
        />
        <Button
          label="Login"
          className="w-[120px] h-[38px] rounded-[8px] px-[16px] py-[8px] 
          bg-[var(--yellow-btn)] cursor-pointer 
          absolute top-[13px] font-bold right-[10px] text-[14px] text-[var(--black-900)]"
        />
      </div>
    </div>
  );
};

export default Header;
