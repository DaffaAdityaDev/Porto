import React from 'react';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';



const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0881-5346-656">phone: 0881-5346-656</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="https://mail.google.com/mail/?view=cm&fs=1&to=daffaaditya.me@gmail.com" target="_blank">daffaaditya.me@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Contact</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/DaffaAdityaDev" target="_blank">
          <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/daffaadityarahman-14b588192/" target="_blank">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://mail.google.com/mail/?view=cm&fs=1&to=daffaaditya.me@gmail.com" target="_blank"> 
            <AiOutlineMail size="3rem"/> 
          </SocialIcons>
          
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
