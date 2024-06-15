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
          As a Full Stack Developer, I excel in crafting seamless web interfaces and robust backend solutions. My strong skills come from deep knowledge in JavaScript, React.js and TailwindCSS for front-end development, paired with Node.js, MySQL, and MongoDB for server-side and database management. I am also proficient in Java and PHP, leaning for the Laravel framework, enabling me to deliver full-spectrum web applications that are both dynamic and user-friendly.
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
