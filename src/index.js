import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Products from './views/Products';
import ProductsSortedDesc from './views/ProductsSortedDesc'
import ProductsSortedAsc from './views/ProductsSortedAsc'
import Header from './views/Header'
import Navigation from './views/Navigation'
import CategoryFilter from './views/CategoryFilter'
import Product from './views/Product';
import ShoppingCart from './views/ShoppingCart';
import './css/index.css';

library.add(faAngleRight)
library.add(faShoppingCart)

const token = "https://api-euwest.graphcms.com/v1/cjlxlogvw33ys01f8ccdxx6il/master"
const client = new ApolloClient({ uri: token });

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
