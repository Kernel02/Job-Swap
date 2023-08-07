import React, { useContext } from "react";

// Create our car context using React.CreateContext()
export const UserContext = React.createContext();

// Create a custom hook that allows easy access to our UserContext values
export const useUser = () => useContext(UserContext);

// Creating our car provider. Accepts an argument of `props`
export default function UserProvider(props) {
  const users = [
    {
      id: 1,
      username: "JKman",
      email: "sample@email.com",
    },
    {
      id: 2,
      username: "CoolUSE",
      email: "email@email.com",
    },
  ];

  // The provider component will wrap all other components inside of it that need access to our global state
  return <UserContext.Provider value={{ users }} {...props} />;
}
