//imports from pages
import Home from './pages/Home';
import Login from './pages/LogIn'
import Products from './pages/Products'
import Profile from './pages/Profile'
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



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
    <ApolloProvider client={client}>
      <Router>
        <>
        <AppNavbar />
        <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path= "/login" component={Login} />
            <Route exact path= "/products" component={Products} />
            <Route exact path= "/profile" component={Profile} />
          </Switch>
        </div>
        <Footer />
      </div>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;