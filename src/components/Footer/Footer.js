import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
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
              color: 'white',
            }}
          >
            <span> &lt; /&gt; RAHUL KHERAJANI</span>
          </a>
        </Link>
        <SocialContainer>
          <SocialIcons href='https://google.com'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://google.com'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://google.com'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
