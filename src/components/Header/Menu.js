import styled from "styled-components";
import Link from "next/link";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Menu({ menu }) {
  const { height, width } = useWindowDimensions();

  const MainMenu = menu.map((link, i) => (
    <MenuItem key={`link-${i}`} display={height > 1050 ? "block" : "none"}>
      {
        <Link href={link.url} passHref>
          <MenuLink>{link.label}</MenuLink>
        </Link>
      }
    </MenuItem>
  ));

  return <Root>{MainMenu}</Root>;
}

const Root = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0;
  height: 40px;

  @media (max-width: 1050px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  font-family: var(--body-font);
  font-size: 22px;
  line-height: 1.1;
  list-style: none;
  height: 100%;
`;

const MenuLink = styled.a`
  color: var(--light-body, #fff);
  text-decoration: none;
  transition: color 0.1s ease-in;

  &::before {
    content: "&";
    color: var(--light-secondary, #fff);
    padding-right: 5px;
    font-size: 30px;
    transition: color 0.1s ease-in;
  }

  &::after {
    content: ";";
    color: var(--light-secondary, #fff);
    font-size: 28px;
    transition: color 0.1s ease-in;
  }

  &:hover {
    color: var(--light-secondary, #fff);

    &::before,
    &::after {
      color: var(--light-primary, #fff);
    }
  }
`;

export default Menu;
