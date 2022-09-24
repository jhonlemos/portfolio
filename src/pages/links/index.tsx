import { useTranslation } from "react-i18next";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdFileDownload, MdMail, MdTextSnippet } from "react-icons/md";

import { Section } from "./style";
import React from "react";

interface Props {
  windowSize: {
    windowWidth: number;
    windowHeight: number;
  };
}

export default function Links({ windowSize }: Props) {
  const { t } = useTranslation();

  return (
    <Section id="links">
      <div className="container">
        <div>
          <h2>{t("links.title1")}</h2>
          <div className="link_list">
            <section>
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-victor-lemos/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                <h3>{t("links.linkedin.title")}</h3>
              </a>
              <p>{t("links.linkedin.text")}</p>
            </section>
            <section>
              <a
                href="https://github.com/jhonlemos"
                target="_blank"
                rel="noreferrer"
              >
                <GoMarkGithub />
                <h3>{t("links.github.title")}</h3>
              </a>
              <p>{t("links.github.text")}</p>
            </section>
            <section>
              <h3>
                <MdTextSnippet />
                {t("links.resume.title")}
              </h3>
              <p>{t("links.resume.text")}</p>
              <a
                href="/assets/resume/curriculo-front.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <MdFileDownload />
                Currículo
              </a>
            </section>
          </div>
        </div>
        <div id="talk">
          <h2>{t("links.title2")}</h2>
          <div className="link_list">
            <section>
              <a
                href={
                  windowSize.windowWidth > 768
                    ? "https://web.whatsapp.com/send?phone=5531985434893&text=Ol%C3%A1%2C%20acabei%20de%20ver%20seu%20portif%C3%B3lio!"
                    : "https://api.whatsapp.com/send?phone=5531985434893&text=Ol%C3%A1%2C%20acabei%20de%20ver%20seu%20portif%C3%B3lio!"
                }
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                <h3>{t("links.whats.title")}</h3>
              </a>
              <p>{t("links.whats.text")}</p>
            </section>
            <section>
              <a
                href="mailto:jolita.0312@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdMail />
                <h3>{t("links.email.title")}</h3>
              </a>
              <p>{t("links.email.text")}</p>
            </section>
          </div>
          <h4>{t("links.thanks")}</h4>
        </div>
      </div>
    </Section>
  );
}
