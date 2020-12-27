module.exports = {
  context: {
    newProdData: {
      title: "New products",
      products: [
        { name: "Seto topi", price: { new: 29 } },
        { name: "Mushroom topi", price: { new: 25 } },
        { name: "Dhaka topi", price: { new: 22 } },
      ],
    },
    bestProdData: {
      title: "Beste Products",
      products: [
        { name: "Nepali topi", price: { new: 25 } },
        { name: "Kalo topi", price: { new: 20 } },
        { name: "Rangila topi", price: { old: 17, new: 13 } },
      ],
    },
  },
};
