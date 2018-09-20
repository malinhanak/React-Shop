import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import '../css/index.css';

const CategoryFilter = ({ data: { loading, error, products} }) => {
  if (error) return <h1>Error fetching the post!</h1>;
  if (loading) return <p>Loading...</p>;
    let catti;
  let productmap = products.map((product) => {
    catti = product.category
    if(product.stock === 0){
      return null
    } else {
        return (
          <section className="product-box" key={product.id}>
            <Link to={`/${product.slug}`}><h4>{product.name}</h4></Link>
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
    <section className="first-page">
      <h3>Products filtered on {catti}</h3>
        <section className="product-section">
          {productmap}
        </section>
    </section>
  )
}

export const filterOnCategory = gql`
query filterOnCategory($categorySlug: String!) {
  products(where: {categorySlug: $categorySlug}) {
      id
      name
      price
      personality
      stock
      slug
      category
      categorySlug
      img {
        url
      }
    }
  }
`

export default graphql(filterOnCategory, {
  options: ({ match }) => ({
    variables: {
      categorySlug: match.params.categorySlug
    }
  })
})(CategoryFilter)
