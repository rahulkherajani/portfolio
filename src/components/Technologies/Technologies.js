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
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>Typescript, JavaScript, Python, Java</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            SQL, PLSQL, MySQL, OracleDB, MongoDB, Firebase, DynamoDB, Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Web Technologies</ListTitle>
          <ListParagraph>
            HTML5, CSS3, DOM, React, Redux, Express.js, Node.js, Material UI,
            Bootstrap, Figma, Jest, Cypress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Cloud Technologies</ListTitle>
          <ListParagraph>
            AWS: EC2, Lambda, API Gateway, VPC, SQS, SNS, Cloudformation; <br />
            GCP: VM, Cloudfunctions, Pub/Sub, API Gateway
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <ListContainer>
          <ListTitle>Mobile Technologies</ListTitle>
          <ListParagraph>Android Studio</ListParagraph>
        </ListContainer>
      </ListItem> */}
      <ListItem>
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            JIRA, Docker, Kubernetes, Postman, Git, Github, Gitlab, Confluence
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
