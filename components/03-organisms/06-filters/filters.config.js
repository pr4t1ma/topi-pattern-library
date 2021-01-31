module.exports = {
  context: {
    color: {
      label: "Color",
      fieldName: "color",
      options: [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
      ],
    },
    size: {
      label: "Size",
      fieldName: "size",
      options: [
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
      ],
    },
    sortData: {
      label: "Sort",
      fieldname: "sort",
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
