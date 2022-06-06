import styled from "styled-components";
import Github from "./github.svg";
import Rss from "./rss.svg";
import Wordpress from "./wordpress.svg";

import useBoop from "../../../hooks/useBoop";
import { animated } from "react-spring";

function Icons({ center }) {
  return (
    <Root center={center}>
      <GithubIcon />
      <WordpressIcon />
      <RSSIcon />
    </Root>
  );
}

const GithubIcon = () => {
  const [style, trigger] = useBoop({
    y: -5,
    rotation: -15,
    springConfig: {
      tension: 100,
      friction: 5,
    },
  });

  return (
    <AnimatedLink
      onMouseEnter={trigger}
      style={style}
      href="https://github.com/gerrgg"
      target="_blank"
    >
      <Github fill="currentColor" />
    </AnimatedLink>
  );
};

const WordpressIcon = () => {
  const [style, trigger] = useBoop({
    y: -5,
    springConfig: {
      tension: 100,
      friction: 5,
    },
  });

  return (
    <AnimatedLink
      onMouseEnter={trigger}
      style={style}
      href="https://wordpress.com"
      target="_blank"
    >
      <Wordpress fill="currentColor" />
    </AnimatedLink>
  );
};

const RSSIcon = () => {
  const [style, trigger] = useBoop({
    y: -5,
    rotation: 15,
    springConfig: {
      tension: 100,
      friction: 5,
    },
  });

  return (
    <AnimatedLink
      onMouseEnter={trigger}
      style={style}
      href="https://wordpress.com"
      target="_blank"
    >
      <Rss fill="currentColor" />
    </AnimatedLink>
  );
};

const Root = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: ${({ center }) => (center ? "0 auto" : "0 0 0 auto;")};
  padding: 0;
`;

const IconLink = styled.a`
  transition: color 0.1s ease-in;
  color: var(--primary);

  &:hover {
    color: var(--accent);
  }
`;

const AnimatedLink = animated(IconLink);

export default Icons;
