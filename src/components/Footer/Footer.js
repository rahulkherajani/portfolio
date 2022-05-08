import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIcons,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <Link href='/'>
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '2em',
              color: 'white',
            }}
          >
            <span> &lt; RAHUL KHERAJANI /&gt;</span>
          </a>
        </Link>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
