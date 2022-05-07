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
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  SocialIcons,
} from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! I am Rahul
          <span role='img' aria-label='wave' style={{ marginLeft: '0.5em' }}>
            👋
          </span>
        </SectionTitle>
        <SectionText>A Full Stack Web Developer!</SectionText>
        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href='https://google.com'>
              <SiGmail size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://google.com'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://google.com'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
