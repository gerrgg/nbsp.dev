import styled from "styled-components";
import Link from "next/link";

function Menu() {
  const menu = [
    { label: "How to's", url: "/how-to" },
    { label: "Projects", url: "/projects" },
    { label: "Resume", url: "/resume" },
  ];

  return (
    <Root>
      {menu.map((link, i) => (
        <MenuItem key={`link-${i}`}>
          {
            <Link href={link.url} passHref>
              <MenuLink>{link.label}</MenuLink>
            </Link>
          }
        </MenuItem>
      ))}
    </Root>
  );
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
