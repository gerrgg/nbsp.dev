import Header from "../Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto 0 auto;
  padding: 0 15px;
`;
