import styled from "styled-components";

function Menu() {
  const menu = ["How to's", "Portfolio", "Resume"];

  return (
    <Root>
      {menu.map((link, i) => (
        <MenuItem key={`link-${i}`}>{link}</MenuItem>
      ))}
    </Root>
  );
}

const Root = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const MenuItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 16px;
  line-height: 1.1;
  list-style: none;
`;

export default Menu;
