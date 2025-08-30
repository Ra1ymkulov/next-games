import React from "react";
import scss from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCloudDownload } from "react-icons/md";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <button>
            <CiSearch />
          </button>
          <p>pesquisar</p>
          <div className={scss.option}>
            <select>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
            <button className={scss.entrar}>Entrar</button>
            <button>
              Cadastrar <MdOutlineCloudDownload style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
