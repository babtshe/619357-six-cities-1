import React, {Fragment, useCallback} from 'react';
import {propTypes} from 'prop-types';

const ReviewForm = (props) => {
  const {
    onChange,
    onSubmit,
    rating,
    comment,
    submitDisabled,
    formDisabled,
  } = props;
  const handleChange = useCallback((evt) => {
    onChange(evt.target.name, evt.target.value);
  }, [onChange]);
  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (submitDisabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, submitDisabled]);

  const options = [
    {id: `5`, title: `perfect`},
    {id: `4`, title: `good`},
    {id: `3`, title: `not bad`},
    {id: `2`, title: `badly`},
    {id: `1`, title: `terribly`},
  ];

  return (
    <form className="reviews__form form" action="#" onSubmit={handleSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {options.map((item) => (
          <Fragment key={item.id}>
            <input onChange={handleChange} disabled={formDisabled} checked={item.id === rating} className="form__rating-input visually-hidden" name="rating" value={item.id} id={`${item.id}-stars`} type="radio" required/>
            <label htmlFor={`${item.id}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea onChange={handleChange} disabled={formDisabled} required minLength="50" maxLength="300" className="reviews__textarea form__textarea" value={comment} id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled || formDisabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = propTypes;

export default ReviewForm;
