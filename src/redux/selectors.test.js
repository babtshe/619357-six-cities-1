import {getCities, getCurrentCity, getCurrentCityOffers} from './selectors';
import NameSpace from './name-space';

const mockCity = {name: `test`, location: [0, 0], zoom: 12};

it(`Should have only unique cities`, () => {
  const mockedState = {
    [NameSpace.OFFERS]: {
      offers: (new Array(10)).fill({city: mockCity}),
    }
  };

  expect(getCities(mockedState).length).toEqual(1);
});

it(`Should return current city`, () => {
  const mockedState = {
    [NameSpace.CITIES]: {
      city: mockCity,
    },
  };

  expect(getCurrentCity(mockedState)).toEqual(mockCity);
});

it(`Should only have current city offers`, () => {
  const mockOffers = [
    {
      city: mockCity
    },
    {
      city: {
        name: `test2`,
      },
    },
  ];
  const mockedState = {
    [NameSpace.CITIES]: {
      city: mockCity,
    },
    [NameSpace.OFFERS]: {
      offers: mockOffers,
    },
  };

  expect(getCurrentCityOffers(mockedState)).toEqual([{city: mockCity}]);
});
