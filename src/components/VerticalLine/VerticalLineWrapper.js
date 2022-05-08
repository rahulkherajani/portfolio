import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from './styled-component-media-queries';

/**
 * Styled component
 */
const Wrapper = styled.section`
  width: 100%;
  margin: 2em auto;
  position: relative;
  padding: 0em 1em;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    height: ${(props) => props.lineHeight}px;
    width: 5px;
    background: rgba(255, 255, 255, 0.75);
  }

  @media screen and (${device.tablets}) {
    ::before {
      left: 0%;
    }
  }

  @media screen and (${device.smalldevices}) {
    ::before {
      left: 0%;
    }
  }
`;

function VerticalLineWrapper({ className, children }) {
  const [lineHeight, setLineHeight] = useState(0);
  const wrapperHeight = useRef(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setLineHeight(
        wrapperHeight.current.clientHeight -
          wrapperHeight.current.lastChild.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [children, lineHeight]);

  return (
    <Wrapper
      ref={wrapperHeight}
      id='vertical--line--wrapper'
      className={className}
      lineHeight={lineHeight}
    >
      {children}
    </Wrapper>
  );
}

export default VerticalLineWrapper;
