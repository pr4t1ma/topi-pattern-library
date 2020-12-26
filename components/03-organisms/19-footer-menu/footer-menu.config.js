module.exports = {
  context: {
    help: {
      modifier: "vertical",
      links: [
        {
          label: "Zahlung & Rechnungen",
          href: "/payment-invoices",
        },
        {
          label: "Lieferung & Tracking",
          href: "/delivery-tracking",
        },
        {
          label: "Schaden & Ruckgabe",
          href: "/damage-return",
        },
      ],
    },

    giftcard: {
      modifier: "vertical",
      links: [
        {
          label: "Geschenkkarte kaufen",
          href: "/buy-giftcard",
        },
        {
          label: "Reklamation",
          href: "/redeem-giftcard",
        },
      ],
    },
    about: {
      modifier: "vertical",
      links: [
        {
          label: "Geschichte",
          href: "/sory",
        },
        {
          label: "Jobs",
          href: "/jobs",
        },
      ],
    },
  },
};
