import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import { GET_PRODUCTS_SORT_ASC } from '../queries/ProductQuery';
import '../css/index.css';

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
                  <p>{product.personality}</p>
                  <article className="product-details-box">
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Kittens:</strong> {product.stock}</p>
                  </article>
                  <Link to={`/${product.slug}`}>Läs mer</Link>
              </section>
          )
        }
      });
      return (
        <section className="first-page">
          <h3>Product sorted on price lowest to highest</h3>
            <section className="product-section">
              {productmap}
            </section>
        </section>

      )
  }}
</Query>
);

export default ProductsSortedAsc;
