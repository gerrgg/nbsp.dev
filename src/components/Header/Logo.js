import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { keyframes } from "styled-components";

function Logo() {
  let [newText, setNewText] = useState("");
  const textRef = useRef(null);
  const string = "NBSP.DEV";
  let index = 0;

  const displayString = () => {
    setNewText(string.slice(0, index));
    index++;
    if (index > string.length) {
      setNewText(string);
    }
  };

  const randomSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    textRef.current = setInterval(displayString, randomSpeed(500, 1000));
    return () => {
      clearInterval(textRef);
    };
  }, []);

  return (
    <Root>
      <Font ref={textRef}>
        {newText.split().map((letter, i) => (
          <span key={`logoText-${i}`}>{letter}</span>
        ))}
      </Font>
      <Cursor />
    </Root>
  );
}

const fadeInandOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Root = styled.div`
  position: relative;
  display: inline-flex;
  height: 34px;
`;

const Font = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  letter-spacing: 0.125em;
  font-size: 36px;
  line-height: 0.9;
  width: auto;
  margin: 0;
  text-transform: uppercase;
`;

const Cursor = styled.span`
  position: absolute;
  right: -10px;
  height: 100%;
  width: 2px;
  background: blue;
  animation: ${fadeInandOut} 2s linear infinite;
`;

export default Logo;
