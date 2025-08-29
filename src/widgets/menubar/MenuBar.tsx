import React from "react";
import scss from "./MenuBar.module.scss";
import { TbMenu } from "react-icons/tb";

const MenuBar = () => {
  return (
    <div className={scss.menuBar}>
      <div className={scss.menuContainer}>
        <div className={scss.menu_logo}>
          <img src="/Logo.svg" alt="/logo-image" />
          <TbMenu />
        </div>
        <div className={scss.insideBanner}>
          <img src="/grátis.svg" alt="" />
        </div>
        <div className={scss.games}>
          <h4>Games</h4>
          <div>
            <p>Dice</p>
          </div>
          <div>
            <p>Dice</p>
          </div>
          <div>
            <p>Dice</p>
          </div>
          <div>
            <p>Dice</p>
          </div>
          <div>
            <p>Dice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
