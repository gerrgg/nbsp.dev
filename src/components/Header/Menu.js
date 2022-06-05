import styled from "styled-components";
import Link from "next/link";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Menu({ menu }) {
  const { height, width } = useWindowDimensions();

  const MainMenu = menu.map((link, i) => (
    <MenuItem key={`link-${i}`} display={height > 900 ? "block" : "none"}>
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
`;

const MenuItem = styled.li`
  font-family: var(--body-font);
  font-size: 22px;
  line-height: 1.1;
  list-style: none;
`;

const MenuLink = styled.a`
  color: var(--body, #fff);
  text-decoration: none;
  transition: color 0.1s ease-in;

  &::before {
    content: "&";
    color: var(--light-secondary, #fff);
    padding-right: 5px;
    font-size: 30px;
    transition: color 0.1s ease-in;

    @media (max-width: 950px) {
      font-size: 20px;
    }
  }

  &::after {
    content: ";";
    color: var(--light-secondary, #fff);
    font-size: 28px;
    transition: color 0.1s ease-in;

    @media (max-width: 950px) {
      font-size: 20px;
    }
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
