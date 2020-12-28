module.exports = {
  context: {
    modifier: "default",
    links: [
      {
        label: "Startseite",
        href: "./homepage",
      },
      {
        label: "Uber uns",
        href: "./aboutpage",
      },
      {
        label: "Kategorien",
        href: "./categorypage",
      },
      {
        label: "Geschichte",
        href: "./stories",
      },
      {
        label: "Kontakt",
        href: "./contactpage",
      },
    ],
  },
  variants: [
    {
      name: "vertical",
      context: {
        modifier: "vertical",
      },
    },
  ],
};
