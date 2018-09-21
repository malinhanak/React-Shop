import gql from "graphql-tag";


const CREATE_REVIEW = gql`
mutation createReview($review: String!, $rating: Int!, $slug: String!, $author: String!, $status: Status!) {
    createReview(
      data: {
        review: $review,
  	    product: {connect: {slug: $slug}},
      	author: $author,
      	rating: $rating
        status: $status
      }
    ) {
      id
      product {
        slug
      }
      review
      author
      rating
    }
  }
`;

const CREATE_ORDER = gql`
mutation createOrder($order: String!, $amount: Int!, $email: String!, $name: String!, $status: Status!) {
    createOrder(
      data: {
        status: $status
        order: $order,
  	    amount: $amount,
      	email: $email,
      	name: $name
      }
    ) {
      id
      order
      amount
      email
      name
    }
  }
`

export {
  CREATE_REVIEW,
  CREATE_ORDER
}
