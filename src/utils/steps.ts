const steps = [
  {
    name: "FirstName",
    question: "What's your first name?",
    validation: (value: string) => {
      if (!value.trim()) {
        return "First name cannot be empty.";
      }
      if (value.length < 2) {
        return "First Name must be at least 2 characters long.";
      }
      if (/[^a-zA-Z'-]/.test(value)) {
        return "First name can only contain letters, apostrophes, or hyphens."; // Restricts invalid characters
      }
      return "";
    },
  },

  {
    name: "LastName",
    question: "What's your last name?",
    validation: (value: string) => {
      if (!value.trim()) {
        return "Last name cannot be empty.";
      }
      if (value.length < 2) {
        return "Last Name must be at least 2 characters long.";
      }
      if (/[^a-zA-Z'-]/.test(value)) {
        return "Last name can only contain letters, apostrophes, or hyphens."; // Restricts invalid characters
      }
      return "";
    },
  },

  {
    name: "Email",
    question: "What's your email address?",
    validation: (value: string) =>
      /^(?!.*\.\.)(?!.*\.$)(?!.*@\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ? ""
        : "Please enter a valid email address.",
  },
  {
    name: "Phone",
    question: "What's your phone number?",
    validation: (value: string) => (/^\d{10}$/.test(value) ? "" : "Please enter a 10-digit phone number."),
  },
  {
    name: "Income",
    question: "What's your income?",
    options: ["0-1.000", "1.000-2.000", "2.000-3.000", "3.000-4.000", ">4.000"],
    validation: (value: string) => (value ? "" : "Please select income range."),
  },
  { name: "Summary", question: "Please review your information:" },
];

export default steps;
