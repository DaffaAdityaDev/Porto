import React from 'react';

import { Section, SectionText, SectionTitle, SectionSubTextColerBlue, AboutmeText, CurrentmeText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { SocialIcons } from '../Header/HeaderStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillProfile, AiOutlineMail } from 'react-icons/ai';
import { SocialContainer } from '../Footer/FooterStyles';
import Redirect from '../Redirect/Redirect';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <Redirect />
      <SectionSubTextColerBlue>
        Hi There!, my name is
      </SectionSubTextColerBlue>
      <SectionTitle main center>
        Daffa Aditya Rahman <br />
        I'm a Software Engineer
      </SectionTitle>
      <SectionText>
        A self-taught software engineer who develop, build and Explore tehcnologies.
      </SectionText>
      <CurrentmeText>
        🚀 Exploring opportunities and side projects. <br/>
        🎓 Currently an Software Engineer Student at Bina Sarana Informatika. 
      </CurrentmeText>
      <Button>About Me</Button>
      <AboutmeText>
        Hey! I'm Daffa Aditya Rahman, I'm Passionate On Technologies and Programming <br/><br/>

        I started my journey as a programmer when i've Graduated From Vocational High School, When My best friend recommended me to join a CS50's Introduction to Computer Science.
        since that i started have passion on programming, After i've Finised CS50 Course i started to explored how to code myself, 
        I learn various language and tehcnologies start from Web-Development, Computer-Science, Software-Engineering, etc. <br/><br/>

        When I'm not coding i play game with my friend, watch some anime, or if weather's good, go to joging
      </AboutmeText>
      <SocialContainer>
          <SocialIcons href="https://github.com/DaffaAdityaDev" target="_target">
            <AiFillGithub size="2rem" margin-right= "5px"/> <h3>Github</h3>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/daffaadityarahman-14b588192/" target="_target"> 
            <AiFillLinkedin size="2rem"/> <h3>LinkedIn</h3>
          </SocialIcons>
          <SocialIcons href="https://mail.google.com/mail/?view=cm&fs=1&to=daffaaditya.me@gmail.com" target="_blank"> 
            <AiOutlineMail size="2rem"/> <h3>Email</h3>
          </SocialIcons>
      </SocialContainer>

    </LeftSection>
    
  </Section>
);

export default Hero;
