import React from 'react';
import {propTypes} from './reviews-list.props';
import Review from '../review/review';
import {connect} from 'react-redux';
import ReviewForm from '../review-form/review-form';
import {getAuthStatus} from '../../redux/selectors';
import withReviewSubmit from '../../hocs/with-review-submit/with-review-submit';
import {sendReview} from '../../redux/operations';

const ReviewFormWrapped = withReviewSubmit(ReviewForm);

const ReviewsList = (props) => {
  const {
    reviews,
    isAuthorized,
    id,
    postReview,
  } = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} {...review}/>)}
      </ul>
      {isAuthorized ? <ReviewFormWrapped
        id={id}
        sendReview={postReview}
      /> : ``}
    </section>
  );
};

ReviewsList.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isAuthorized: getAuthStatus(state),
});

const mapDispatchToProps = {
  postReview: sendReview,
};

export {ReviewsList};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
