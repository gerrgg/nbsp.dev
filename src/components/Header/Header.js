import styled from "styled-components";
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

const Root = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1100px;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 15px;
  border-bottom: 1px solid var(--secondary);

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
