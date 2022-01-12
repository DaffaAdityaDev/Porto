import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import { Fade } from 'react-reveal';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <Fade left>
      <SectionTitle main>Projects</SectionTitle>
    </Fade>
    <Fade>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }) => {
          
          return <BlogCard key={id}>
            
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">Code</ExternalLinks>
              <ExternalLinks href={source} target="_blank">Page</ExternalLinks>
            </UtilityList>
          
          </BlogCard>
          
        })}
      </GridContainer>
    </Fade>
  </Section>
);

export default Projects;