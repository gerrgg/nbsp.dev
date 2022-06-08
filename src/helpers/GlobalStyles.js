import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100vh;

    color: var(--light-body, #333);
    background: var(--dark-background, #fff);
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
    color: var(--primary, #333);
  }

  :root {
    --title-font: "Libre Barcode 39 Extended Text";
    --header-font: "Chango";
    --body-font: "Source Code Pro";
  
    /* setup preset colors for use on components */
    --dark-background: hsla(var(--primary-10), 100%);
    --light-background: hsla(var(--primary-10), 90%);

    --dark-body: hsla(var(--primary-90), 100%);
    --light-body: hsla(var(--primary-80), 100%);
  
    --mobileMenuBackground: hsla(var(--accent-60), 60%);
    --mobileMenuAccent: hsla(var(--primary-90), 80%);

    --mobileMenuBackgroundLight: hsla(var(--accent-90), 80%);
    --mobileMenuAccentLight: hsla(var(--accent-20), 100%);
  
    --dark-primary: hsla(var(--primary-10), 70%);
    --primary: hsla(var(--primary-50), 90%);
    --light-primary: hsla(var(--primary-70), 70%);
  
    --dark-secondary: hsla(var(--secondary-30), 60%);
    --secondary: hsla(var(--secondary-50), 100%);
    --secondary: hsla(var(--secondary-50), 50%);
    --light-secondary: hsla(var(--secondary-70), 90%);

    --accent: hsla(var(--accent-50), 100%);
    --light-accent: hsla(var(--accent-70), 100%);

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
  
    
  }
`;

export default GlobalStyles;
