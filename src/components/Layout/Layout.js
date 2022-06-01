import Header from "../Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}
