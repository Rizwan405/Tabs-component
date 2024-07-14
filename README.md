

Overall, the flow of the application should look something like this:

- In App.jsx, use the fetch API to get job information from an external API, set up a loading state, and display a message to the user while the data is being fetched.
- Once the data has been fetched, store it in a state variable using the useState hook.
- Create a JobInfo component to display the first job in the list, using object destructuring to extract the relevant data from the job object.
- Use the Duties component to render the list of duties for each job.
- Use the uuid library to generate unique ids for each job, and use these ids instead of the index to set the key prop for the JobInfo and Duties components.
- Create a currentItem state variable in App.jsx and pass it down to the JobInfo component as a prop, using it to display the current job.
- Set up a BtnContainer component and pass the jobs array, currentItem state variable, and setCurrentItem function down as props.
- In the BtnContainer component, create a button for each job in the jobs array, and attach the setCurrentItem function to each button to change the currentItem state variable and render the selected job.
