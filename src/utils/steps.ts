const steps = [
  {
    name: "FirstName",
    question: "What's your first name?",
    validation: (value: string) => (value.length >= 2 ? "" : "Name must be at least 2 characters long."),
  },

  {
    name: "LastName",
    question: "What's your last name?",
    validation: (value: string) => (value.length >= 2 ? "" : "Name must be at least 2 characters long."),
  },

  {
    name: "Email",
    question: "What's your email address?",
    validation: (value: string) => (/\S+@\S+\.\S+/.test(value) ? "" : "Please enter a valid email address."),
  },
  {
    name: "Phone",
    question: "What's your phone number?",
    validation: (value: string) => (/^\d{10}$/.test(value) ? "" : "Please enter a 10-digit phone number."),
  },
  {
    name: "Income",
    question: "What's your income?",
    validation: (value: string) => (value ? "" : "Please select income range."),
  },
  { name: "Summary", question: "Please review your information:" },
];

export default steps;
