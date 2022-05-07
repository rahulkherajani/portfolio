import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './AcomplishmentsStyles';

import VerticalLineWrapper from '../VerticalLine/VerticalLineWrapper';
import VerticalLineContent from '../VerticalLine/VerticalLineContent';

const Acomplishments = () => (
  <Section id='education'>
    <SectionDivider divider />
    <SectionTitle>Education</SectionTitle>
    <List>
      <ListItem>
        <VerticalLineWrapper>
          <VerticalLineContent position='right'>
            <ListParagraph
              style={{
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: '500',
              }}
            >
              {' '}
              Dalhousie University
            </ListParagraph>
            <ListParagraph> Halifax, Canada</ListParagraph>
            <ListParagraph> Master of Applied Computer Science</ListParagraph>
            <ListParagraph> Sep 2021 - Dec 2022 (Current)</ListParagraph>
            <List>
              <ListItem>
                <ListParagraph>
                  - Important Subjects: Advanced Software Development, Web
                  Development, Cloud Computing
                </ListParagraph>
              </ListItem>
            </List>
          </VerticalLineContent>
          <VerticalLineContent position='right'>
            <ListParagraph
              style={{
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: '500',
              }}
            >
              {' '}
              Shri G.S. Institute of Technology & Science (R.G.P.V.)
            </ListParagraph>
            <ListParagraph> Indore, India</ListParagraph>
            <ListParagraph>
              {' '}
              Bachelor of Engineering in Electronics
            </ListParagraph>
            <ListParagraph> Jul 2014 - Jun 2018 </ListParagraph>
            <List>
              <ListItem>
                <ListParagraph>
                  - Important Subjects: Data Structures & Algorithms, Operating
                  Systems, Computer & Mobile Networks
                </ListParagraph>
              </ListItem>
            </List>
          </VerticalLineContent>
        </VerticalLineWrapper>
      </ListItem>
    </List>
  </Section>
);

export default Acomplishments;
