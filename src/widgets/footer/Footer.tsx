import React from "react";
import scss from "./Footer.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src="/Logo.svg" alt="" />
            <img src="/preLogo.svg" alt="" />
          </div>
          <ul>
            <li>Jogos</li>
            <li>Crash</li>
            <li>Double</li>
            <li>Mines</li>
            <li>Dice</li>
            <li>Tower</li>
          </ul>
          <ul>
            <li>Links</li>
            <li>Conta</li>
            <li>Depositar</li>
            <li>Sacar</li>
          </ul>
          <ul>
            <li>Social</li>
            <li>
              <span>
                <FaFacebookF />
              </span>
              Facebook
            </li>
            <li>
              <span>
                <FaTwitter />
              </span>
              Twitter
            </li>
            <li>
              <span>
                <FaInstagram />
              </span>
              Instagram
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
