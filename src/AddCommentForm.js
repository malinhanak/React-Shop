import React, { Component } from 'react';
import './css/index.css';
import { Mutation } from "react-apollo";
import { CREATE_REVIEW } from './queries/mutations';

class AddReviewForm extends Component {
  render() {
    const slugvalue = this.props.slugname;
    this.review = React.createRef();
    this.author = React.createRef();
    this.rating = React.createRef();

    return (
      <Mutation
        mutation={CREATE_REVIEW}>
        {(createReview, { data }) => (
            <form onSubmit={e => {
              e.preventDefault();
              console.log(this.refs)
              createReview({
                variables: {
                  review: this.review.current.value,
                  slug: slugvalue,
                  author: this.author.current.value,
                  rating: this.rating.current.value,
                  status: "PUBLISHED"
                }
              });
            }}>
              <input ref={this.review} placeholder="review"/>
              <input ref={this.author} placeholder="author"/>
              <input ref={this.rating} placeholder="rating"/>
              <button type="submit">Add Review</button>
            </form>

        )}
      </Mutation>
    );
  }

};

export default AddReviewForm;
