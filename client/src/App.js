// Dependencies
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./reset.scss";
import "./App.scss";

// Pages and Components
import Home from "./components/pages/home";
import LoginForm from "./components/pages/login";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/pages/profile";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Listing" element={"listing-page"} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
