import styled from "styled-components";
import github from "../../../public/github.svg";
import light from "../../../public/light.svg";
import rss from "../../../public/rss.svg";
import wordpress from "../../../public/wordpress.svg";

function Icons() {
  const icons = [light, github, wordpress, rss];
  return (
    <Root>
      {icons.map((icon, i) => (
        <Icon
          key={`icon-${i}`}
          src={icon.src}
          height={icon.height}
          width={icon.width}
        />
      ))}
    </Root>
  );
}

const Root = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: auto;
`;

const Icon = styled.img`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 16px;
  line-height: 1.1;
  list-style: none;
`;

export default Icons;
