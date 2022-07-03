import Header from "../Header";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { handleTheme } from "./layout.helpers";
import ColorPickers from "../ColorPickers";

export default function Layout({ children }) {
  // write helper to get local storage theme or use default
  const [selectedTheme, setSelectedTheme] = useState(handleTheme());

  return (
    <ThemeProvider theme={selectedTheme}>
      <Header />
      <Wrapper>{children}</Wrapper>
      {/* <ColorPickers
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      /> */}
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 125px auto 0 auto;
  padding: 25px 15px 50px;
  background: var(--mobileMenuBackgroundLight);
  border-radius: 24px;
  color: var(--mobileMenuAccentLight);
  font-weight: 700;

  @media (max-width: 1250px) {
    width: calc(100vw - 50px);
    box-sizing: border-box;
  }
`;
