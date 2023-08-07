import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import UserProvider from "./utils/UserContext";
import JobListingProvider from "./utils/JobListingContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddJob from "./pages/AddJob"

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <JobListingProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/addJob" element={<AddJob />} />
            </Routes>
          </Router>
        </JobListingProvider>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
