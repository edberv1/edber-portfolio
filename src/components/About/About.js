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
            I started learning Web Developement back in 2018, when I was a high school freshman. Presently I am student in the bachelor degree of "Computer Science and Engineering" at: <br></br> <a href="https://www.ubt-uni.net/" target="_blank" rel="noopener noreferrer" className="linku">UBT - Higher Education Institution</a> 
          </StyledParagraph>
          <StyledParagraph>
          Junior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages and frameworks including HTML5, CSS, JavaScript, NodeJS, Microsoft SQL Server, ReactJS.
          </StyledParagraph>
          <StyledParagraph>
            In my free time, I explore the world around me, play football and video games.  
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="cv.pdf"
              href="https://drive.google.com/u/0/uc?id=1hXqdSEqeaNsaWfrjgcD6xW-ectDdCXLl&export=download"
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
