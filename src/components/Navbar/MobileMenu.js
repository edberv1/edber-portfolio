import React from "react";
import { IoMdMail } from "react-icons/io";
import {
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileButton,
  MobileSocials,
  MobileSocial,
  MobileQuote,
  CloseText,
} from "../styles/MobileMenu.styled";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseText></CloseText>
        <CloseIcon />
      </Icon>
      <MobileMenuList>
        <MobileMenuLink to="home" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="projects" onClick={toggle}>
          Projects
        </MobileMenuLink>
        <MobileMenuLink to="about" onClick={toggle}>
          About
        </MobileMenuLink>
        <MobileButton
          href="mailto:vuciternaedber@gmail.com"
          target="_blank"
        >
          <span>
            <IoMdMail />
            <span>get in touch</span>
          </span>
        </MobileButton>
      </MobileMenuList>
      <MobileSocials>
        <MobileSocial
          href="mailto:vuciternaedber@gmail.com"
          target="_blank"
        >
          <IoMdMail />
        </MobileSocial>
        <MobileSocial
          href="https://github.com/edberv1"
          target="_blank"
        >
          <SiGithub />
        </MobileSocial>

        <MobileSocial
          href="https://www.linkedin.com/in/edber-vu%C3%A7it%C3%ABrna-aa205b22b/"
          target="_blank" 
        >
          <SiLinkedin />
        </MobileSocial>
      </MobileSocials>
      <MobileQuote></MobileQuote>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
