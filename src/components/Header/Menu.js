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
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 24px;
  line-height: 1.1;
  list-style: none;
`;

const MenuLink = styled.a`
  color: var(--body, #fff);
  text-decortation: none;

  &:hover {
    color: blue;
  }
`;

export default Menu;
