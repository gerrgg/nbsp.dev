export const handleTheme = (useDefault = false) => {
  const defaultTheme = {
    colors: [
      { label: "primary", h: 292, s: 19 },
      { label: "secondary", h: 360, s: 100 },
      { label: "accent", h: 131, s: 93 },
    ],
  };

  if (useDefault) return defaultTheme;

  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("userTheme") !== null
  ) {
    const localTheme = JSON.parse(localStorage.getItem("userTheme"));
    return localTheme;
  }

  return defaultTheme;
};
