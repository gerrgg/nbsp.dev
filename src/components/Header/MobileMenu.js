import styled from "styled-components";
import useBoop from "../../hooks/useBoop";
import { animated, useSpring, config } from "react-spring";
import Link from "next/link";
import Icons from "./Icons/Icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function MobileMenu({ mobileMenuIsOpen, menu, toggleMobileMenu }) {
  const { height, width } = useWindowDimensions();

  const styles = useSpring({
    display: mobileMenuIsOpen ? "flex" : "none",
    top: mobileMenuIsOpen ? -15 : height,
  });

  const Wrapper = animated(Root);

  return (
    <Wrapper
      onClick={() => {
        toggleMobileMenu();
      }}
      active={mobileMenuIsOpen}
      style={styles}
    >
      <List>
        {menu.map((link, i) => (
          <MenuItem key={`mobile-link-${i}`}>
            {
              <Link href={link.url} passHref>
                <MenuLink>{link.label}</MenuLink>
              </Link>
            }
          </MenuItem>
        ))}
      </List>
      <Icons center={true} />
    </Wrapper>
  );
}

const Root = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: var(--secondary);
  left: 0;
  gap: 30px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  left: -25px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 0;
`;

const MenuItem = styled.li`
  font-family: var(--header-font);
  letter-spacing: 0.1em;
  font-size: 46px;
  line-height: 1.1;
  list-style: none;
  text-align: center;
`;

const MenuLink = styled.a`
  color: var(--light-accent, #fff);
  text-decoration: none;
  transition: color 0.1s ease-in;

  &:hover {
    color: var(--dark-primary, #fff);

    &::before,
    &::after {
      color: var(--light-primary, #fff);
    }
  }
`;

export default MobileMenu;
