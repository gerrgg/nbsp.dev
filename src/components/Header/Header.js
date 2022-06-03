import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Icons from "./Icons";

const Root = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
`;

function Header() {
  return (
    <Root>
      <Logo />
      <Menu />
      <Icons />
    </Root>
  );
}

export default Header;
