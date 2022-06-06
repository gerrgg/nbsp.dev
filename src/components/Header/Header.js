import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Icons from "./Icons/Icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Sling as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const { height, width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  const menu = [
    { label: "How to's", url: "/how-to" },
    { label: "Projects", url: "/projects" },
    { label: "Resume", url: "/resume" },
  ];

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Root>
      <Logo />
      {width > 900 ? (
        <Flex>
          <Menu menu={menu} />
          <Icons />
        </Flex>
      ) : (
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
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
    filter: drop-shadow(0px 0px 5px var(--light-secondary));
  }

  50% {
    filter: drop-shadow(0px 0px 20px var(--light-secondary));
  }

  100% {
    filter: drop-shadow(0px 0px 5px var(--light-secondary));
  }
`;

const Root = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1100px;
  padding: 15px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 15px;
  border-bottom: 1px solid var(--secondary);
  border-left: 1px solid var(--secondary);
  border-right: 1px solid var(--secondary);
  transition: all 0.5s ease;

  background: var(--background);

  animation: ${pulse} 5s linear infinite;

  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`;

export default Header;
