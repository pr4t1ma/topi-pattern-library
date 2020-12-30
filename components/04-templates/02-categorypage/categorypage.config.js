module.exports = {
  context: {
    pageHeaderData: {
      title: "Mütze",
      subtitle: "Mütze aus Nepal",
    },
    bannerData: {
      blockquote: false,
      imageData: {
        imgAttr: "1200/300?" + Math.random(),
        alt: "Muten aus Nepal",
      },
    },
    productListData: {
      title: "",
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
      ],
    },
  },
};
