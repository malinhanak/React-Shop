import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      price
      personality
      stock
      slug
      category
      img {
        url
      }
    }
  }
`;

const GET_PRODUCTS_SORT_DESC = gql`
  {
    products(orderBy:price_DESC) {
      id
      name
      price
      personality
      stock
      slug
      category
      img {
        url
      }
    }
  }
`;

const GET_PRODUCTS_SORT_ASC = gql`
  {
    products(orderBy:price_ASC) {
      id
      name
      price
      personality
      stock
      slug
      category
      img {
        url
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  {
    products {
      id
      category
      categorySlug
    }
  }
`
const GET_SINGLE_PRODUCT = gql`
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

export {
    GET_PRODUCTS,
    GET_PRODUCTS_SORT_DESC,
    GET_PRODUCTS_SORT_ASC,
    GET_CATEGORIES,
    GET_SINGLE_PRODUCT
}
