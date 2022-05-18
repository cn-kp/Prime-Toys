// Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './store';

// Styles
import './reset.scss';
import './App.scss';

// Pages
import Home from './pages/home';
import LoginForm from './pages/login';
import Profile from './pages/profile';
import Listings from './pages/listings';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Layout from "./components/layout/layout"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <div className="grid">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Listings" element={<Listings />} />
                <Route path="/login" element={<LoginForm />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </Router>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
