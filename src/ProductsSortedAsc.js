import React from 'react';
import { Query } from "react-apollo";
import { GET_PRODUCTS_SORT_ASC } from './queries/ProductQuery';
import './css/index.css';

const ProductsSortedAsc = () => (
<Query query={GET_PRODUCTS_SORT_ASC}>
  {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

      let productmap = data.products.map((product) => {
        if(product.stock === 0){
          return null
        } else {
            return (
              <section className="product-box" key={product.id}>
                  <h4>{product.name}</h4>
                  <img src={product.img.url} alt={product.name}></img>
                  <p><em>{product.personality}</em></p>
                  <p>${product.price}</p>
                  <article>
                    <p>{product.stock}</p>
                    <button type="submit">Add to Cart</button>
                  </article>
              </section>
          )
        }
      });
      return (
        <section className="product-section">
        {productmap}
        </section>

      )
  }}
</Query>
);

export default ProductsSortedAsc;
