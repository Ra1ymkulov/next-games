"use client";
import React, { useState } from "react";
import scss from "./MenuBar.module.scss";
import { TbMenu } from "react-icons/tb";
const MenuBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);
  return (
    <div
      style={{
        width: sideBarOpen ? "256px" : "80px",
        paddingInline: sideBarOpen ? "30px" : "20px",
      }}
      className={scss.menuBar}
    >
      <div className={scss.menuContainer}>
        <div className={scss.menu_logo}>
          {sideBarOpen && <img src="/Logo.svg" alt="/logo-image" />}
          <button onClick={() => setSideBarOpen(!sideBarOpen)}>
            <TbMenu fontSize={33} />
          </button>
        </div>
        {sideBarOpen && (
          <div className={scss.insideBanner}>
            <img src="/grátis.svg" alt="" />
          </div>
        )}
        <div className={scss.games}>
          <h4>Games</h4>
          <div>
            <img src="/crash-icons.svg" alt="" />
            {sideBarOpen && <p>Crash</p>}
          </div>
          <div>
            <img src="/dice-icons.svg" alt="" />
            {sideBarOpen && <p>Double</p>}
          </div>
          <div>
            <img src="/mines-icons.svg" alt="" />
            {sideBarOpen && <p>Mines</p>}
          </div>
          <div>
            <img src="/dice-icons.svg" alt="" />
            {sideBarOpen && <p>Dice</p>}
          </div>
          <div>
            <img src="/dice-icons.svg" alt="" />
            {sideBarOpen && <p>Tower</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
