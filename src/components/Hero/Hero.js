import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import {
  CompanyContainer,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  ExternalLinks,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  SocialIcons,
  Img,
} from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! I'm Rahul
          <span role='img' aria-label='wave' style={{ marginLeft: '0.5em' }}>
            👋
          </span>
        </SectionTitle>
        <SectionText>A Full Stack Web Developer!</SectionText>
        <SocialIconsContainer>
          <Img src='/images/photo.png' />
          <SocialContainer>
            <SocialIcons href='mailto:rahulkherajani20@gmail.com'>
              <SiGmail size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/rahulkherajani/'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://github.com/RahulKherajani'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <ExternalLinks target='_blank' href='resume.pdf'>
              Resume
            </ExternalLinks>
          </SocialContainer>
        </SocialIconsContainer>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
