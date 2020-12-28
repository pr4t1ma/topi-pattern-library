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
      title: "Alle Mütze",
      products: [
        { name: "Nepali topi", price: { new: 25 } },
        { name: "Kalo topi", price: { new: 20 } },
        { name: "Rangila topi", price: { old: 17, new: 13 } },
        { name: "Seto topi", price: { new: 29 } },
        { name: "Mushroom topi", price: { new: 25 } },
      ],
    },
    color: {
      label: "Color",
      options: [
        { label: "red", value: "R" },
        { label: "green", value: "G" },
        { label: "blue", value: "B" },
      ],
    },
    size: {
      label: "Size",
      options: [
        { label: "Small", value: "S" },
        { label: "Medium", value: "M" },
        { label: "Large", value: "L" },
      ],
    },
  },
};
