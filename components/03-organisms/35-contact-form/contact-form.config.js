module.exports = {
  context: {
    firstname: {
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
    },
    lastname: {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your Last name",
    },
    email: {
      label: "Email",
      type: "text",
      placeholder: " Enter your e-mail",
    },
    message: {
      label: "Message",
      type: "textarea",
      placeholder: "Enter your Message",
    },
    submit: {
      text: "Submit",
    },
    branch: {
      label: "Branch",
      options: [
        { label: "Germany", value: "1" },
        { label: "Nepal", value: "2" },
        { label: "Global", value: "3" },
      ],
    },
    select: {
      label: "Subject",
      options: [
        { label: "General Feedback", value: "1" },
        { label: "Donations", value: "2" },
        { label: "Product enquiry", value: "3" },
        { label: "Delivery Issue", value: "4" },
      ],
    },
  },
};
