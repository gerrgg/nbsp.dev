import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";

const Font = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  letter-spacing: 0.125em;
  font-size: 36px;
  line-height: 0.9;
  width: auto;
  margin: 0;
  text-transform: uppercase;
`;

const Letter = styled.span`
  // opacity: 0;
  // transition: 0.25s ease;
`;

const Root = styled.div`
  position: relative;
  display: inline-flex;
`;

const Cursor = styled.span`
  position: absolute;
  right: -10px;
  height: 100%;
  width: 2px;
  background: blue;
`;

function Logo() {
  const text = ["n", "b", "s", "p", ".", "d", "e", "v"];

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgba(255, 255, 255, 0.2)" },
    ],
    from: { opacity: 0 },
    delay: 50,
    config: config.default,
  });

  return (
    <Root>
      <Font>
        {text.map((letter, key) => (
          <Letter key={key}>{letter}</Letter>
        ))}
      </Font>
      <Cursor as={animated.div} style={styles} />
    </Root>
  );
}

export default Logo;
