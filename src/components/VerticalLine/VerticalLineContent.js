import React from 'react';
import styled from 'styled-components';
import { device } from './styled-component-media-queries';

const Content = styled.aside`
  position: relative;
  margin: 2em 0px;
  padding-left: 0px;

  ::after {
    content: '';
    display: table;
    clear: both;
  }

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }

  @media screen and (${device.tablets}) {
    padding-left: 0px;
  }
`;

const ContentPoint = styled.span`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  display: block;
  margin-left: -8px;

  @media screen and (${device.tablets}) {
    left: 0%;
    margin-left: -18px;
  }

  @media screen and (${device.smalldevices}) {
    left: 0%;
    margin-left: -18px;
  }
`;

const ContentChildren = styled.div`
  position: relative;
  padding: 0em 2em;
  top: 0;
  width: 100%;

  @media screen and (${device.tablets}) {
    padding: 0em 2em;
    left: ${(props) => (props.position === 'left' ? '0%' : '0%')};
    text-align: ${(props) => (props.position === 'left' ? 'right' : 'left')};
  }

  @media screen and (${device.smalldevices}) {
    padding: 0em 2em;
    left: ${(props) => (props.position === 'left' ? '0%' : '0%')};
    text-align: ${(props) => (props.position === 'left' ? 'right' : 'left')};
  }
`;

function VerticalLineContent({ children, className, position }) {
  return (
    <Content className={className}>
      <ContentPoint />
      <ContentChildren position={position}>{children}</ContentChildren>
    </Content>
  );
}

export default VerticalLineContent;
