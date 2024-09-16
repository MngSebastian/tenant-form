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

**Submit** -- As i already noted, if a step of the form has been skipped via `URL`, submit will send you back to the input that has not been filled but only on second click.  

**Dark Mode Input Autocomple** - When using `autocomplete="on" on a form, the  browser has some predefined styles to let you know that data has been filled, issue is that its turning the input background color to white on darkmode.`  

**Mobile** - Some of the height styles for the main `div` are somehow different after i deploy even though they have not been changed, this results in the mobile version having a scroll function for no reason.  



### `What I would have liked to add`

ck out the [React documentation](https://reactjs.org/).
