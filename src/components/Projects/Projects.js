import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  SocialIcons,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider divider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <SocialIcons href={p.source}>
                <AiFillGithub size='3rem' />
              </SocialIcons>
              {p.visit && (
                <SocialIcons href={p.visit}>
                  <FaExternalLinkSquareAlt size='3rem' />
                </SocialIcons>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
