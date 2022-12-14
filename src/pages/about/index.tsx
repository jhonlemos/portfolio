import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import avatar from "../../assets/img/avatar/avatar.png";
import Tech from "../../components/tech";
import { Section } from "./style";

export default function About() {
  const { t } = useTranslation();

  const most = [
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-javascript-plain",
    "devicon-react-original",
    "devicon-typescript-plain",
  ];

  const some = [
    "devicon-nodejs-plain",
    "devicon-express-original",
    "devicon-jest-plain",
    "devicon-postgresql-plain",
    "devicon-python-plain",
  ];

  const softwares = [
    "devicon-vscode-plain",
    "devicon-figma-plain",
    "devicon-slack-plain",
    "devicon-trello-plain",
  ];

  return (
    <Section id="about">
      <div className="container">
        <div>
          <div className="title">
            <h2>{t("about.title")}</h2>
            <img src={avatar} alt="Foto de Jv" />
          </div>
          <div className="text">
            <p>{t("about.part1")}</p>
            <p>{t("about.part2")}</p>
          </div>
        </div>
        <div>
          <h3>{t("about.techs.title")}</h3>
          <div className="tech_list">
            <h4>{t("about.techs.most")}</h4>
            {most.map((str) => (
              <Tech key={uuidv4()} tech={str} />
            ))}
          </div>
          <div className="tech_list">
            <h4>{t("about.techs.some")}</h4>
            {some.map((str) => (
              <Tech key={uuidv4()} tech={str} />
            ))}
          </div>
          <div className="tech_list">
            <h4>{t("about.techs.softwares")}</h4>
            {softwares.map((str) => (
              <Tech key={uuidv4()} tech={str} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
