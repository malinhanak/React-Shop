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
`

export {
  CREATE_REVIEW
}
