import React from "react";
import "./about.css";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/technologies/my_image.png";
import downloadIcon from "../../assets/icons/download-icon.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">About Me</SectionTitle>
      </SectionHeading>

      <AboutContent>
        <AboutImage src={myImage} />
        <AboutDetailsContainer>
         
          <StyledParagraph>
          As a Full Stack Developer with a focus on front-end development, I possess a comprehensive understanding of the entire development cycle for dynamic web projects. My skill set encompasses a wide range of programming languages and frameworks, including HTML5, CSS, TailwindCSS, JavaScript, NodeJS, MySQL, ReactJS, Java, PHP, Laravel.
          </StyledParagraph>
      
          <Resume>
            <ResumeLink
              download="cv.pdf"
              href="https://drive.google.com/file/d/1OHJyCSJCPCfHYuUi3JLqD__4jcAdbNGr/view?usp=sharing"
              icon={downloadIcon}
      
            >
              Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
