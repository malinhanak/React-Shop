import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import AddReviewForm from './AddCommentForm';
import { GET_PRODUCTS } from '../queries/ProductQuery';
import '../css/index.css';

class Products extends Component {
  render() {
    const { data } = this.props
    if (data.error) return <h4>fetching the post!</h4>;
    if (data.loading) return <p>Loading...</p>;

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
        <h3>All Products</h3>
          <section className="product-section">
            {productmap}
          </section>
      </section>
    )
  }
}

Products = graphql(GET_PRODUCTS)(Products)
export default Products
