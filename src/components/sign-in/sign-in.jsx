import React, {useCallback} from 'react';
import {propTypes} from './sign-in.props';

const SignIn = (props) => {
  const {
    onSubmit,
    onChange,
    userData,
  } = props;

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    onSubmit();
  }, []);

  const handleInputChange = useCallback((evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    onChange(name, value);
  }, []);

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required
                onChange={handleInputChange}
                value={userData.email}/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required
                onChange={handleInputChange}
                value={userData.password}/>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

SignIn.propTypes = propTypes;

export default SignIn;
