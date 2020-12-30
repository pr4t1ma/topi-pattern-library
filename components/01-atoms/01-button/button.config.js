module.exports = {
  context: {
    text: "Search",
  },
  variants: [
    {
      name: "icon-button",
      context: {
        icon: "facebook",
        text: "follow us",
      },
    },
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
    {
      name: "checkbox-button",
      context: {
        label: "Favorite",
        icon: "heart",
      },
    },
  ],
};
