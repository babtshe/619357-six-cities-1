import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';

const initialState = Object.freeze({
  city: {
    name: `Amsterdam`,
    location: [52.38333, 4.9]
  },
  cities,
  offers,
});

export default initialState;
