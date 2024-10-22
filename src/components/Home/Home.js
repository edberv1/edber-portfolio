import React from "react";

import { Name, StyledHome, Title } from "../styles/Home.styled";
import "./style.css";

import { IconContext } from "react-icons";
import { IoMdMail } from "react-icons/io";
import {
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

const Home = () => {
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Edber Vuçitërna</Name>
        <Title>Software Developer</Title>
        <div id="contactdiv">
          <a
            href="https://github.com/edberv1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/edber-vu%C3%A7it%C3%ABrna-aa205b22b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>
          <a href="mailto:vuciternaedber@gmail.com">
            <IoMdMail />
          </a>
        </div>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
