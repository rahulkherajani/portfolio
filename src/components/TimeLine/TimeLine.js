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
            <ListTitle>Arctic Wolf Networks</ListTitle>
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
                Developer Co-op
              </ListParagraph>
              <ListParagraph>
                {' '}
                Co-op (Sep 2022 - Dec 2022) (Present)
              </ListParagraph>
              <ListParagraph> Halifax, Canada</ListParagraph>
              <List>
                <ListItem>
                  <ListParagraph>
                    - Designed and Developed customer facing UI using React &
                    Typescript in frontend applications.
                    <br />
                    - Developed REST APIs using OpenAPI in Golang based web
                    backend services.
                    <br />- Authored UI test cases using Jest and Cypress.
                    Applied test driven development methodology in backend
                    development.
                  </ListParagraph>
                </ListItem>
              </List>
            </VerticalLineContent>
            <VerticalLineContent position='right' />
          </VerticalLineWrapper>
        </ListItem>
      </List>
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
              <ListParagraph> Permanent (Jan 2021 - Jul 2021)</ListParagraph>
              <ListParagraph> Hyderabad, India</ListParagraph>
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
              <ListParagraph> Permanent (Nov 2018 - Dec 2020)</ListParagraph>
              <ListParagraph> Hyderabad, India</ListParagraph>
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
              <ListParagraph> Trainee (Jun 2018 - Oct 2018)</ListParagraph>
              <ListParagraph> Mysuru, India</ListParagraph>
              <List>
                <ListItem>
                  <ListParagraph>
                    - Analyzed SCM & Financial systems designed in Oracle
                    E-Business Suite and engineered complex PLSQL stored
                    procedures for various client requirements. <br />
                    - Developed and Consumed REST APIs in PLSQL based Oracle
                    Database Systems and designed customer-facing UI dashboards
                    using HTML5, CSS3, JavaScript & React. <br />
                    - Performed manual unit testing and authored high quality
                    design documents for multiple client projects. <br />
                    - Obtained hands-on experience in Agile Software Development
                    & SDLC. <br />
                    - Achieved 91% in training program focussed on Python, SQL,
                    PLSQL & Oracle E-Business Suite. <br />
                  </ListParagraph>
                </ListItem>
              </List>
            </VerticalLineContent>
            <VerticalLineContent position='right' />
          </VerticalLineWrapper>
        </ListItem>
      </List>
    </Section>
  );
};

export default Timeline;
