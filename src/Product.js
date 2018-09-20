import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import AddReviewForm from './AddCommentForm';
import { GET_SINGLE_PRODUCT } from './queries/ProductQuery';

const Product = ({ data: { loading, error, products, reviews} }) => {
  if (error) return <h1>Error fetching the post!</h1>;
  if (loading) return <p>Loading...</p>;
  const id = products[0].id;
  const name = products[0].name;
  const price = products[0].price;
  const stock = products[0].stock;
  const desc = products[0].description
  const img = products[0].img.url;
  const slug = products[0].slug;
  const cartPayload = {
    id: products[0].id,
    name: products[0].name,
    price: products[0].price,
    img: products[0].img.url,
    slug: products[0].slug
  }
  function handleAddToCart(e) {
    e.preventDefault();
    let shoppingCart = cartPayload;
    let shoppingCartContent = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    shoppingCartContent.push(shoppingCart);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartContent));
    window.location.reload()
  }
    let myReviews = reviews.map((review) => {
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
    <section key={id}>
      <h4>{name}</h4>
        <img src={img} alt={name}></img>
        <p><em>{desc}</em></p>
        <p>${price}</p>
        <p>{stock}</p>
        {myReviews}
        <AddReviewForm slugname={slug}/>
        <button type="submit" onClick={(e) => handleAddToCart(e)}>Add to Cart</button>

    </section>
  </div>
)
}

export default graphql(GET_SINGLE_PRODUCT, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Product)
