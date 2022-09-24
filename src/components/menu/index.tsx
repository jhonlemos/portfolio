import React from "react";
import { useContext } from "react";
import {
  MdAccountCircle,
  MdForum,
  MdInvertColors,
  MdOutlineLink,
  MdViewCarousel,
} from "react-icons/md";
import { HashLink } from "react-router-hash-link";

import { ThemeContext } from "../../styles/theme";
import { Nav } from "./style";

export default function Menu() {
  const { currentTheme, setCurrentTheme, getOppositTheme } =
    useContext(ThemeContext);

  const changeTheme = () => {
    setCurrentTheme(getOppositTheme());
  };

  return (
    <Nav>
      <div className="container">
        <ul>
          <li>
            <MdAccountCircle />
            <HashLink to={"/#about"}>{"Sobre mim"}</HashLink>
          </li>
          <li>
            <MdViewCarousel />
            <HashLink to={"/#projects"}>{"Projetos"}</HashLink>
          </li>
          <li>
            <MdOutlineLink />
            <HashLink to={"/#links"}>{"Links"}</HashLink>
          </li>
        </ul>
        <ul>
          <li onClick={changeTheme}>
            <MdInvertColors />
            <button className={currentTheme === "dark" ? "active" : "standby"}>
              {" "}
              {"Escuro"}
            </button>{" "}
            |{" "}
            <button className={currentTheme === "light" ? "active" : "standby"}>
              {"Claro"}
            </button>
          </li>
          <li>
            <MdForum />
            <HashLink to={"/#talk"}>{"Fale comigo"}</HashLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
