export const handleTheme = () => {
  const defaultTheme = {
    colors: [
      { label: "dark", h: 272, s: 21 },
      { label: "primary", h: 64, s: 87 },
      { label: "secondary", h: 39, s: 92 },
      { label: "accent", h: 131, s: 62 },
    ],
  };

  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("userTheme") !== null
  ) {
    const localTheme = JSON.parse(localStorage.getItem("userTheme"));
    return localTheme;
  }

  return defaultTheme;
};
