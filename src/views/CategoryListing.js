import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import { GET_CATEGORIES } from '../queries/ProductQuery';

const CategoryListing = () => (
<Query query={GET_CATEGORIES}>
  {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

      let li = []
      let hash = {}
      for (var x = 0; x < data.products.length; x++) {
        const product = data.products[x];
        const categorySlug = product.categorySlug;
        const category = product.category;
        const id = product.id;
        if (!hash[product.categorySlug]) {
            li.push({id, categorySlug, category})
        }
          hash[product.categorySlug] = 1;
      }
      const mapCategory = li.map((cat, i) => {
        if(cat) {
          return <Link key={cat.id} to={`/filter/${cat.categorySlug}`} className="dropdown-item">{cat.category}</Link>
        }
      })

    return (
      <div className="dropdown">
        <div className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter Category
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {mapCategory}
        </div>
      </div>

    )
  }}
</Query>
);

export default CategoryListing;
