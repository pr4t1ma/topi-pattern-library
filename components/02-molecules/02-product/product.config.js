module.exports = {
  context: {
    name: "Kharayo m",
    image: { imgAttr: "600/600?" + Math.random() },
    price: {
      old: "30,-",
      new: "10,-",
    },
    button: {
      icon: "shopping-cart",
      text: "Zu Warenkorb",
    },
  },
  variants: [
    {
      name: "horizontal",
      context: {
        name: "Tarkari",
        image: { imgAttr: "600/600?" + Math.random() },
        price: {
          old: "30,-",
          new: "10,-",
        },
        button: {
          icon: "shopping-cart",
          text: "Zu Warenkorb",
        },
        favoriteData: {
          icon: "heart",
        },
        sizeData: {
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
        colorData: {
          fieldname: "Color",
          options: [
            {
              label: "Red",
              value: "s",
            },
            {
              label: "Green",
              value: "m",
            },
            {
              label: "Black",
              value: "l",
            },
          ],
        },
      },
    },
  ],
};
