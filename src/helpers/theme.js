const theme = {
  colors: [
    { label: "dark", h: 272, s: 21 },
    { label: "primary", h: 64, s: 87 },
    { label: "secondary", h: 39, s: 92 },
    { label: "accent", h: 131, s: 62 },
  ],
};

export const getThemeColor = (key = "s", value = "s") => {
  const selection = theme.colors.find(({ label }) => label === key);

  return value === "h" ? selection.h : selection.s;
};

export default theme;
