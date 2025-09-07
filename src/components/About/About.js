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
          Full Stack Developer skilled in crafting user-friendly web experiences with React.js. I bring a strong foundation in back-end technologies like Laravel, Node.js and SQL to the table, ensuring smooth data integration and application functionality. Experienced in all stages of the development cycle, and dedicated to delivering clean, efficient code while collaborating effectively with teams.
          </StyledParagraph>
      
          <Resume>
            <ResumeLink
              download="cv.pdf"
              href="https://drive.google.com/file/d/10Ss4nXJln1adM7vyWzhtDXMdLsDgB3Zk/view?usp=sharing"
              target="_blank"
             
      
            ><img src={downloadIcon} alt="download icon"/>
              Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
