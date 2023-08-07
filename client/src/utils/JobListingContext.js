import React, { useContext } from "react";

// Create our car context using React.CreateContext()
export const JobListingContext = React.createContext();

// Create a custom hook that allows easy access to our JobListingContext values
export const useJobListing = () => useContext(JobListingContext);

// Creating our car provider. Accepts an argument of `props`
export default function JobListingProvider(props) {
  const jobListings = [
    {
      id: 1,
      jobTitle: "Boss",
      jobDescription: "sample@jobDescription.com",
      salary: 110000,
    },
    {
      id: 2,
      jobTitle: "Employee",
      jobDescription: "email@email.com",
      salary: 75000,
    },
  ];

  // The provider component will wrap all other components inside of it that need access to our global state
  return <JobListingContext.Provider value={{ jobListings }} {...props} />;
}
