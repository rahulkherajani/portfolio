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
          <ListParagraph>JavaScript, Python, Java, SQL, PLSQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, Oracle DB, MongoDB, Firebase, Neo4J
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Web Technologies</ListTitle>
          <ListParagraph>
            HTML5, CSS3, React, Express.js, Node.js, Material UI, Bootstrap,
            Figma, MERN Stack
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Cloud Technologies</ListTitle>
          <ListParagraph>
            AWS: EC2, VPC, Elastic Beanstalk, Lambda, S3, DynamoDB, API Gateway,
            Cognito, SNS, Amplify, Secrets Manager.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Mobile Technologies</ListTitle>
          <ListParagraph>Android Studio</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>JIRA, Scrum, Docker, Postman, Git</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
