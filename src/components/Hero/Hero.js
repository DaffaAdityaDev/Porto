import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Daffa Aditya Rahman <br />
        I'm a Software Engineer
      </SectionTitle>
      <SectionText>
        I'm a engineer who focused build Full-Stack developement in Jakarta
      </SectionText>
      <Button onClick={() => window.open("https://www.linkedin.com/in/daffaadityarahman-14b588192/", "linkedin")}>Learn More</Button>

    </LeftSection>
  </Section>
);

export default Hero;