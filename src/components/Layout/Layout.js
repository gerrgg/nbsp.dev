import Header from "../Header";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { handleTheme } from "./layout.helpers";

export default function Layout({ children }) {
  // write helper to get local storage theme or use default
  const [selectedTheme, setSelectedTheme] = useState(handleTheme());

  return (
    <ThemeProvider theme={selectedTheme}>
      <Header />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 150px auto 0 auto;
`;
