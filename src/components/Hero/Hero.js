import React from 'react';

import { Section, SectionText, SectionTitle, SectionSubTextColerBlue } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { SocialIcons } from '../Header/HeaderStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillProfile, AiOutlineMail } from 'react-icons/ai';
import { SocialContainer } from '../Footer/FooterStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionSubTextColerBlue>
        Hi There!, my name is
      </SectionSubTextColerBlue>
      <SectionTitle main center>
        Daffa Aditya Rahman <br />
        I'm a Software Engineer
      </SectionTitle>
      <SectionText>
        I'm a software engineer who focused build Front-end web developement in Jakarta
      </SectionText>
      <Button onClick={() => window.open("https://www.linkedin.com/in/daffaadityarahman-14b588192/", "linkedin")}>About Me</Button>
      <SocialContainer>
          <SocialIcons href="https://github.com/DaffaAdityaDev" target="_target">
            <AiFillGithub size="2rem" margin-right= "5px"/> <h3>Github</h3>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/daffaadityarahman-14b588192/" target="_target"> 
            <AiFillLinkedin size="2rem"/> <h3>LinkedIn</h3>
          </SocialIcons>
          <SocialIcons href="https://mail.google.com/mail/?view=cm&fs=1&to=daffaadityarahman990@gmail.com" target="_blank"> 
            <AiOutlineMail size="2rem"/> <h3>Email</h3>
          </SocialIcons>
      </SocialContainer>

    </LeftSection>
    
  </Section>
);

export default Hero;