import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import AddReviewForm from './AddCommentForm';
import { GET_SINGLE_PRODUCT } from '../queries/ProductQuery';
import '../css/index.css';

class Product extends Component {
  render() {
    const { data } = this.props
    if (data.error) return <h4>fetching the post!</h4>;
    if (data.loading) return <p>Loading...</p>;
    const id = data.products[0].id;
    const name = data.products[0].name;
    const price = data.products[0].price;
    const stock = data.products[0].stock;
    const desc = data.products[0].description
    const img = data.products[0].img.url;
    const slug = data.products[0].slug;

    const cartPayload = { id, name, price, img, slug }

    function handleAddToCart(e) {
      e.preventDefault();
      let shoppingCartContent = JSON.parse(localStorage.getItem("shoppingCart")) || [];
      let shoppingCart = cartPayload;

      shoppingCartContent.push(shoppingCart);
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartContent));
      window.location.reload()
    }
    const allReviews = data.reviews ? data.reviews : []
    let myReviews;
      if (allReviews.length) {
        myReviews = allReviews.map((review) => {
          return (
            <section key={review.id} className="review-detail">
              <article className="review-author-rating">
                <p><strong>Author:</strong> {review.author}</p>
                <p><strong>Rating:</strong> {review.rating}</p>
              </article>
              <p><em>{review.review}</em></p>
            </section>
          )
        });
      } else {
        myReviews = <div>Inga reviews</div>;
      }

    return (
      <div className="product-page">
      <Link to={`/`}><h6>Back to all products</h6></Link>
        <section key={id} className="product-container">
          <img src={img} alt={name}></img>
          <article className="product-details">
            <h4>{name}</h4>
            <p>{desc}</p>

            <h5>Details</h5>
              <p><strong>Price:</strong> ${price}</p>
              <p><strong>Kittens in stock:</strong> {stock}</p>
              <button type="submit" onClick={(e) => handleAddToCart(e)}>Add to Cart</button>
          </article>
        </section>
        <section className="review-container">
          <h5>Reviews for {name}</h5>
          {myReviews}

          <h6>Add a comment!</h6>
          <AddReviewForm slugname={slug}/>
        </section>
      </div>
    )
  }
}

export default graphql(GET_SINGLE_PRODUCT, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Product)
