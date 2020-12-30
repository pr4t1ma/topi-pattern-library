module.exports = {
  context: {
    color: {
      label: "Color",
      options: [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
      ],
    },
    size: {
      label: "Size",
      options: [
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
      ],
    },
    sortData: {
      fieldname: "Sort",
      options: [
        {
          label: "Popular",
          value: "p",
        },
        {
          label: "Newest",
          value: "n",
        },
        {
          label: "Cheapest",
          value: "c",
        },
        {
          label: "Sale",
          value: "s",
        },
      ],
    },
  },
};
