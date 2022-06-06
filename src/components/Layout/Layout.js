import Header from "../Header";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../helpers/theme";
import { useEffect, useState } from "react";
import { HslColorPicker } from "react-colorful";

export default function Layout({ children }) {
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const [dark, setDark] = useState({ h: 272, s: 21, l: 100 });
  const [primary, setPrimary] = useState({ h: 64, s: 87, l: 100 });
  const [secondary, setSecondary] = useState({ h: 39, s: 92, l: 100 });
  const [accent, setAccent] = useState({ h: 131, s: 62, l: 100 });

  useEffect(() => {
    const userTheme = {
      colors: [
        { label: "dark", code: `${dark.h}, ${dark.s}%` },
        { label: "primary", code: `${primary.h}, ${primary.s}%` },
        { label: "secondary", code: `${secondary.h}, ${secondary.s}%` },
        { label: "accent", code: `${accent.h}, ${accent.s}%` },
      ],
    };

    setSelectedTheme(userTheme);
  }, [dark, primary, secondary, accent]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Flex>
        <Field>
          <h2>Dark</h2>
          <HslColorPicker color={dark} onChange={setDark} alpha />
        </Field>
        <Field>
          <h2>Primary</h2>
          <HslColorPicker color={primary} onChange={setPrimary} alpha />
        </Field>
        <Field>
          <h2>Secondary</h2>
          <HslColorPicker color={secondary} onChange={setSecondary} alpha />
        </Field>
        <Field>
          <h2>Accent</h2>
          <HslColorPicker color={accent} onChange={setAccent} alpha />
        </Field>
      </Flex>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto 0 auto;
  padding: 0 15px;
`;

const Flex = styled.div`
  display: flex;
  gap: 100px 75px;
  justify-content: center;
  margin: 60px auto;
  max-width: 600px;
  flex-flow: row wrap;
`;

const Field = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-direction: column;
`;
