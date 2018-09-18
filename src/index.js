import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Products from './Products';
import ProductsSortedDesc from './ProductsSortedDesc'
import ProductsSortedAsc from './ProductsSortedAsc'
import Header from './Header'
import Navigation from './Navigation'
import {Single} from './Product';
import './css/index.css';

const token = "https://api-euwest.graphcms.com/v1/cjlxlogvw33ys01f8ccdxx6il/master"
const client = new ApolloClient({
  uri: token
});
  const App = () => (
    <Router>
      <ApolloProvider client={client}>
        <Header/>
        <Navigation/>
        <main>
            <Route exact path='/' component={Products} />
            <Route exact path='/sortDESC' component={ProductsSortedDesc} />
            <Route exact path='/sortASC' component={ProductsSortedAsc} />
            <Route path='/product/:slug' component={Single} />
        </main>
      </ApolloProvider>
    </Router>
  );

ReactDOM.render(<App />, document.getElementById('root'));
