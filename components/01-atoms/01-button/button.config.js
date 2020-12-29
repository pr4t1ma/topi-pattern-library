module.exports = {
  context: {
    icon: "search",
    text: "Search",
  },
  variants: [
    {
      name: "radio-buttons",
      context: {
        fieldname: "Size",
        options: [
          {
            label: "S",
            value: "s",
          },
          {
            label: "M",
            value: "m",
          },
          {
            label: "L",
            value: "l",
          },
        ],
      },
    },
  ],
};
