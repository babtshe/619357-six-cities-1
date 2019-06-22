import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import Header from './header';

it(`Header should render correctly`, ()=>{
  const tree = renderer
  .create(<MemoryRouter>
    <Header
      isAuthorized = {false}
      onLoginClick = {()=>{}}
    />
  </MemoryRouter>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
