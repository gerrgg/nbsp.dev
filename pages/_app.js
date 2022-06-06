import react, { useState } from "react";
import Layout from "../src/components/Layout";
import GlobalStyles from "../src/helpers/GlobalStyles";
import theme from "../src/helpers/theme";
import { createGlobalStyle } from "styled-components";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
