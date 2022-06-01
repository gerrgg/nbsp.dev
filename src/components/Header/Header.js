import styled from "styled-components";
import Logo from "./Logo";

const Root = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
`;

function Header() {
  return (
    <Root>
      <Logo />
    </Root>
  );
}

export default Header;
