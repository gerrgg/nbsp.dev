import styled from "styled-components";
import { useEffect, useState } from "react";
import { HslColorPicker } from "react-colorful";
import { handleTheme } from "./Layout/layout.helpers";

const ColorPickers = ({ selectedTheme, setSelectedTheme }) => {
  const _color = (key, value) => {
    const selection = selectedTheme.colors.find(({ label }) => label === key);

    return value === "h" ? selection.h : selection.s;
  };

  // set default state using local theme or default

  const [primary, setPrimary] = useState({
    h: _color("primary", "h"),
    s: _color("primary", "s"),
    l: 50,
  });

  const [secondary, setSecondary] = useState({
    h: _color("secondary", "h"),
    s: _color("secondary", "s"),
    l: 50,
  });

  const [accent, setAccent] = useState({
    h: _color("accent", "h"),
    s: _color("accent", "s"),
    l: 50,
  });

  useEffect(() => {
    setSelectedTheme(handleTheme());

    const userTheme = {
      colors: [
        { label: "primary", h: primary.h, s: primary.s },
        { label: "secondary", h: secondary.h, s: secondary.s },
        { label: "accent", h: accent.h, s: accent.s },
      ],
    };

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("userTheme", JSON.stringify(userTheme));
    }
  }, [primary, secondary, accent]);

  return (
    <Root>
      <Flex>
        <Field>
          <h2>Primary</h2>
          <HslColorPicker color={primary} onChange={setPrimary} />
        </Field>
        <Field>
          <h2>Secondary</h2>
          <HslColorPicker color={secondary} onChange={setSecondary} />
        </Field>
        <Field>
          <h2>Accent</h2>
          <HslColorPicker color={accent} onChange={setAccent} />
        </Field>
      </Flex>
      <Flex>
        <ClearButton
          onClick={() => {
            setSelectedTheme(handleTheme(true));
          }}
        >
          Clear
        </ClearButton>
      </Flex>
    </Root>
  );
};

export default ColorPickers;

const Root = styled.div``;

const Flex = styled.div`
  display: flex;
  gap: 100px 75px;
  justify-content: center;
  margin: 60px auto;
  max-width: 800px;
  flex-flow: row wrap;
`;

const Field = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-direction: column;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  border: 2px solid var(--primary);
  background: transparent;
  color: var(--primary);
  appearance: none;
  font-size: 24px;
  margin: 0 auto;
  font-family: var(--header-font);
`;
