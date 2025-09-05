import React from "react";
import Icon from "../Icon/Icon";
import TextCustom from "../TextCustom/TextCustom";
import styles from "./SidebarItem.module.css";

const Sidebar: React.FC = () => {
  return (
    <div
      className="max-w-[350px] w-full h-[960px] border-r-[1px]
         border-[var(--blue-border)] bg-[var(--neutral-0)]"
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

      {/* Menu Items */}
      <div className="flex flex-col items-center max-h-[620px] h-full mt-[32px] max-w-[350px]">
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px]  w-[200px ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/ep_setting.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--neutral-text-slide-bar)] text-[18px] font-[500]">
                Change password
              </TextCustom>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px]  w-[200px ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/map-location.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--neutral-text-slide-bar)] text-[18px] font-[500]">
                Venue management
              </TextCustom>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px]  w-[200px ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/user.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--neutral-text-slide-bar)] text-[18px] font-[500]">
                Admin account management
              </TextCustom>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px]  w-[200px ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/user-settings.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--neutral-text-slide-bar)] text-[18px] font-[500]">
                Roles & permission
              </TextCustom>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px]  w-[200px ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/two-user.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--neutral-text-slide-bar)] text-[18px] font-[500]">
                List of Mewling app users
              </TextCustom>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px]  w-[200px ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/qc.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--neutral-text-slide-bar)] text-[18px] font-[500]">
                Banners management
              </TextCustom>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px] w-[200px] ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/Vector.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--neutral-text-slide-bar)] text-[18px] font-[500]">
                Notification
              </TextCustom>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full flex items-center">
          <div className="w-[6px] h-full bg-[var(--blue-border-before)] rounded-tr-[10px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-[25px]  w-[200px ml-[44px] mt-[17px] mb-[17px] flex items-center gap-[10px]">
            <div className="h-[25px] w-[25px]">
              <Icon image="/icon/log-out.svg" />
            </div>
            <div className="">
              <TextCustom className="text-[var(--red-logout)] text-[18px] font-[500]">
                Log out
              </TextCustom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
