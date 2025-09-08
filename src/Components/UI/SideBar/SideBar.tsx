import React from "react";
import Icon from "../Icon/Icon";
import TextCustom from "../TextCustom/TextCustom";
import SidebarItem from "./Components/SidebarItem";
import Button from "../Button/Button";

const sidebarItems = [
  { image: "/icon/ep_setting.svg", label: "Change password" },
  { image: "/icon/map-location.svg", label: "Venue management" },
  { image: "/icon/user.svg", label: "Admin account management" },
  { image: "/icon/user-settings.svg", label: "Roles & permission" },
  { image: "/icon/two-user.svg", label: "List of Mewling app users" },
  { image: "/icon/qc.svg", label: "Banners management" },
  { image: "/icon/Vector.svg", label: "Notification" },
  {
    image: "/icon/log-out.svg",
    label: "Log out",
    labelClass: "text-[var(--red-logout)]",
  },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className="max-w-[350px] w-full h-[960px] border-r-[1px]
         border-[var(--blue-border)] bg-[var(--neutral-0)] position overflow-y-auto scrollbar-none"
    >
      <div className="flex flex-col items-center h-[97px]">
        {/* Avatar circle */}
        <div className="w-[48px] h-[48px] rounded-full bg-[var(--pink-background)] flex items-center justify-center overflow-hidden">
          <Icon
            image="/avatar.png"
            className="w-[48px] h-[48px] object-cover"
          />
        </div>

        {/* Username */}
        <TextCustom className="text-[var(--neutral-text)] text-[14px] font-[500] mt-[12px]">
          Kevin Wong
        </TextCustom>
        <div className="mt-[11px] w-full h-[1px] bg-[radial-gradient(circle,#432C2C_0%,#501C1C00_100%)]"></div>
      </div>

      <Button
        label=""
        className="rounded-full w-[30px] h-[30px] 
        border-[1px] border-[var(--neutral-200)]
        absolute top-[165px] left-[610px] flex items-center
        "
        onClick={toggleSidebar}
      >
        <Icon
          image="./icon/angle-left-small.svg"
          className={`ml-[2px] transform transition-transform duration-300 ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </Button>

      {/* Menu Items */}
      <div className="flex flex-col items-center max-h-[620px] h-full mt-[32px] max-w-[350px] space-y-5">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            image={item.image}
            label={item.label}
            labelClass={item.labelClass}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
