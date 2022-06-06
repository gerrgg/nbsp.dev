import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100vh;

    color: var(--body, #333);
    background: var(--background, #fff);
    font-family: var(--body-font);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--header-font);
    margin: 0;
  }

  a {
    color: var(--body, #333);
  }

  :root {
    --title-font: "Libre Barcode 39 Extended Text";
    --header-font: "Chango";
    --body-font: "Source Code Pro";
  

    ${({ theme }) => {
      const colors = theme.colors.map(({ label, h, s }) => {
        let css = `--base-${label}: ${h}, ${s}%;`;

        for (let i = 1; i <= 10; i++) {
          css += `--${label}-${i * 10}: var(--base-${label}), ${i * 10}%;`;
        }

        return css;
      });

      return colors.join(" ");
    }}
  
    /* setup preset colors for use on components */
    --background: hsla(var(--dark-10), 100%);
    --body: hsla(var(--dark-80), 90%);
  
    --mobileMenuBackground: hsla(var(--accent-60), 60%);
    --mobileMenuAccent: hsla(var(--dark-90), 80%);
  
    --primary: hsla(var(--primary-70), 100%);
    --light-primary: hsla(var(--primary-80), 70%);
  
    --secondary: hsla(var(--secondary-50), 100%);
    --light-secondary: hsla(var(--secondary-50), 70%);
  }
`;

export default GlobalStyles;
