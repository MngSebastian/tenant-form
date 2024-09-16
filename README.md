# Buena tenant onboarding flow.
This is a tenant onboarding form built for Buena as part of the hiring process.

How to run?
Install dependencies: `npm install` and run the app: `npm run start` or go to: `https://tenant-form-ccvrn9dpa-mngsebastians-projects.vercel.app/form/name`

## Technologies Used

Typescript,
React,
Tailwindcss,
Prettier for formatting,
Lucide React for icons,





### `Features`

**Dark mode** - this was unnecessary but I wanted to add it. There is a better way to do it in `tailwind.config.js` but it was a spontaneous decision and I went with a less cleaner approach.
**LocalStorage** - Form data and DarkMode are saved and do not get lost on refresh.
**Validation** - As can be seen here: `validation: (value: string) => (value.length >= 2 ? "" : "Name must be at least 2 characters long.")` validation is nowhere near robust enough, it's basic, and for an app or component in production, it would have to be more complex and cover more cases.
**Routing** - you can go to any part of the form via url `/form/email`.
**All steps validation** - If you went straight to `/form/email` and continued to submit, you will be taken back to the first field that has a validation error and all others will be saved, problem is in this case submit must be clicked twice to work :(. I did not have time to look into it.
**Input fields Clear Icon** - Every Input field renders an `x` icon to clear the field when text has been entered.
**Mobile Responsive** - Looks good on mobile but there is a bug that makes you have to scroll for no reason.

### `Issues`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `What I would have liked to add`

ck out the [React documentation](https://reactjs.org/).
