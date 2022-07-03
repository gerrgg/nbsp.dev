import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Icons from "./Icons/Icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Sling as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

function Header() {
  const { height, width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  const menu = [
    { label: "How to's", url: "/posts" },
    { label: "Projects", url: "/projects" },
    { label: "Resume", url: "/resume" },
  ];

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Root>
      <Logo />
      {width > 1050 ? (
        <Flex>
          <Menu menu={menu} />
          <Icons />
        </Flex>
      ) : (
        <div>
          <ButtonWrapper>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </ButtonWrapper>
          <MobileMenu
            mobileMenuIsOpen={isOpen}
            toggleMobileMenu={toggleMobileMenu}
            menu={menu}
          />
        </div>
      )}
    </Root>
  );
}

const pulse = keyframes`
  0% {
    filter: drop-shadow(0px 0px 25px var(--light-accent));
  }

  100% {
    filter: drop-shadow(0px 0px 5px var(--light-secondary));
  }
`;

const Root = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1200px;
  padding: 15px 30px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 15px;
  height: 70px;
  background: var(--light-background);

  animation: ${pulse} 3s linear infinite alternate;

  @media (max-width: 1250px) {
    width: calc(100vw - 50px);
    justify-content: space-between;
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    padding: 15px 15px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`;

const ButtonWrapper = styled.div`
  position: relative;
  top: 4px;
`;

export default Header;
