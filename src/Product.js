import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
//import { Query } from "react-apollo";

/*const Reviews = ({ data: { loading, error, reviews} }) => {
  if (error) return <h1>Error fetching the post!</h1>;
  if (loading) return <p>Loading...</p>;
  let myRev = reviews.map((review) => {
    return (
          <section key={review.id}>
            <h4>{review.rating}</h4>
            <p>{review.product.rating}</p>
          </section>
      )
});
return (
  <div>
  {myRev}
  </div>
)
}*/

const Product = ({ data: { loading, error, products, reviews} }) => {
  console.log('single product', reviews)
  if (error) return <h1>Error fetching the post!</h1>;
  if (loading) return <p>Loading...</p>;
  let myProduct = products.map((product) => {
    return (
          <section key={product.id}>
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
  });
  let myReviews = reviews.map((review) => {
    console.log('length', reviews.length)
    if(reviews === null){
      return (
              <p>No reviews found!</p>
        )
    } else {
      return (
          <section key={review.id}>
            <p><em>{review.review}</em></p>
              <p>{review.author}</p>
              <p>rating: {review.rating}</p>
          </section>
      )
    }
  });
return (
  <div>
  <Link to={`/`}><h6>Back to all products</h6></Link>
  {myProduct}
  {myReviews}
  </div>
)
}

export const singleProduct = gql`
  query singleProduct($slug: String!) {
    products(where: {slug: $slug}) {
      id
      name
      description
      category
      price
      stock
      slug
      personality
      img {
        url
      }
    }
    reviews(where: {product: {slug: $slug}}) {
      id
      review
      product {
        slug
      }
      author
      rating
    }
  }
`
const Single = graphql(singleProduct, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Product)

export {
  Single
}
