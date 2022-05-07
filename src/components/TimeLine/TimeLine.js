import React from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TimeLineStyles';

import VerticalLineWrapper from '../VerticalLine/VerticalLineWrapper';
import VerticalLineContent from '../VerticalLine/VerticalLineContent';

const Timeline = () => {
  return (
    <Section id='experience'>
      <SectionDivider divider />
      <SectionTitle>Experience</SectionTitle>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>Infosys Limited ( 3 Years+ )</ListTitle>
          </ListContainer>
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
                Senior Systems Engineer
              </ListParagraph>
              <ListParagraph> Full-time (Jan 2021 - Jul 2021)</ListParagraph>
              <ListParagraph> Hyderabad, India</ListParagraph>
              <List>
                <ListItem>
                  <ListParagraph>
                    - Analyzed SCM & Financial systems designed in Oracle ERP
                    and suggested enhancements to streamline client processes.
                    <br />
                    - Developed and consumed REST APIs in Java based Oracle
                    Systems. <br /> - Developed user-facing UI screens using
                    HTML, CSS, JavaScript & React JS.
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
                Systems Engineer
              </ListParagraph>
              <ListParagraph> Full-time (Nov 2018 - Dec 2020)</ListParagraph>
              <ListParagraph> Hyderabad, India</ListParagraph>
              <List>
                <ListItem>
                  <ListParagraph>
                    - Developed complex SQL stored procedures and functions for
                    various client requirements.
                    <br />- Authored high quality design documents for multiple
                    client projects. <br />- Obtained hands-on experience in
                    Agile Software Development.
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
                Systems Engineer Trainee
              </ListParagraph>
              <ListParagraph> Full-time (Jun 2018 - Oct 2018)</ListParagraph>
              <ListParagraph> Mysuru, India</ListParagraph>
              <List>
                <ListItem>
                  <ListParagraph>
                    - Achieved 91% in Foundation Training Program focussed on
                    Python, SQL, PLSQL & Oracle ERP.
                  </ListParagraph>
                </ListItem>
              </List>
            </VerticalLineContent>
          </VerticalLineWrapper>
        </ListItem>
      </List>
    </Section>
  );
};

export default Timeline;
