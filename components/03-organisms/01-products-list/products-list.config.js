module.exports = {
  context: {
    title: "New products",
    products: [
      {
        name: "Kharayo m",
        image: { imgAttr: "700/800?" + Math.random() },
        price: {
          old: "40,-",
          new: "30,-",
        },
        button: {
          icon: "shopping-cart",
          text: "Zu Warenkorb",
        },
      },
      {
        name: "Jarayo m",
        image: { imgAttr: "700/800?" + Math.random() },
        price: {
          old: "30,-",
          new: "10,-",
        },
        button: {
          icon: "shopping-cart",
          text: "Zu Warenkorb",
        },
      },
      {
        name: "Harayo m",
        image: { imgAttr: "700/800?" + Math.random() },
        price: {
          old: "20,-",
          new: "14,-",
        },
        button: {
          icon: "shopping-cart",
          text: "Zu Warenkorb",
        },
      },
    ],
  },
};
