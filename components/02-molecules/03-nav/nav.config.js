module.exports = {
  context: {
    modifier: "default",
    links: [
      {
        label: "Startseite",
        href: "/",
      },
      {
        label: "Uber uns",
        href: "/about",
      },
      {
        label: "Geschichte",
        href: "/story",
      },
      {
        label: "Kontakt",
        href: "/contact",
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
