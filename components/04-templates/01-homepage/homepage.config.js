module.exports = {
  context: {
    newProdData: {
      title: "New products",
      products: [
        {
          name: "Seto topi",
          image: { imgAttr: "600/600?" + Math.random() },
          button: {
            icon: "shopping-cart",
            text: "Zu Warenkorb",
          },
          price: { new: 29 },
        },
        {
          name: "Mushroom topi",
          image: { imgAttr: "600/600?" + Math.random() },
          button: {
            icon: "shopping-cart",
            text: "Zu Warenkorb",
          },
          price: { new: 25 },
        },
        {
          name: "Dhaka topi",
          image: { imgAttr: "600/600?" + Math.random() },
          button: {
            icon: "shopping-cart",
            text: "Zu Warenkorb",
          },
          price: { new: 22 },
        },
      ],
    },
    bestProdData: {
      title: "Beste Products",
      products: [
        {
          name: "Nepali topi",
          image: { imgAttr: "600/600?" + Math.random() },
          button: {
            icon: "shopping-cart",
            text: "Zu Warenkorb",
          },
          price: { new: 25 },
        },
        {
          name: "Kalo topi",
          image: { imgAttr: "600/600?" + Math.random() },
          button: {
            icon: "shopping-cart",
            text: "Zu Warenkorb",
          },
          price: { new: 20 },
        },
        {
          name: "Rangila topi",
          image: { imgAttr: "600/600?" + Math.random() },
          button: {
            icon: "shopping-cart",
            text: "Zu Warenkorb",
          },
          price: { old: 17, new: 13 },
        },
      ],
    },
  },
};
