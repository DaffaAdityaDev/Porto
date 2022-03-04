import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Fade from 'react-reveal/Fade';

const Technologies = () =>  (
  <Fade>
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.From Front-end To design
        <br />
      </SectionText>
      
        <List>
          <ListItem>
            <DiReact size="3rem" />
            <ListContainer>
              <ListTitle>Front-end</ListTitle>
              <ListParagraph>
                HTML & CSS <br />
                React.JS<br />
                Next.JS <br />
                Axios<br />
                Sass<br />
                Tailwind<br />
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <DiFirebase size="3rem" />
            <ListContainer>
              <ListTitle>Back-end</ListTitle>
              <ListParagraph>
                MongoDB<br/>
                Node.JS<br />
                mySQL<br/>
                Linux<br/>
                Python<br/>
                Express<br/>
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <DiZend size="3rem" />
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Figma <br />
                Photoshop <br/>
                Web Vital <br/>
                Responsive Design <br/>
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
    </Section>
  </Fade>
);

export default Technologies;
