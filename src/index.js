import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Products from './Products';
import ProductsSortedDesc from './ProductsSortedDesc'
import ProductsSortedAsc from './ProductsSortedAsc'
import Header from './Header'
import Navigation from './Navigation'
import CategoryFilter from './CategoryFilter'
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './css/index.css';

library.add(faAngleRight)

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
            <Switch>
              <Route exact path='/sortDESC' component={ProductsSortedDesc} />
              <Route exact path='/sortASC' component={ProductsSortedAsc} />
              <Route exact path='/ShoppingCart' component={ShoppingCart} />
              <Route exact path='/:slug' component={Product} />
              <Route exact path='/filter/:categorySlug' component={CategoryFilter} />
            </Switch>
        </main>
      </ApolloProvider>
    </Router>
  );

ReactDOM.render(<App />, document.getElementById('root'));
