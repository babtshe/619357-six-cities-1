import {cities} from './cities';

const createMockOffer = (cityName, cityLocation) => {
  const getRandomBoolean = () => Math.random() >= 0.5;
  const getRandomCoordinate = (coordinate) =>{
    return +(coordinate + 0.05 - Math.random() * 0.1).toFixed(12);
  };
  const mockOffer = {
    city: cityName,
    name: `Beautiful place in\u00A0${cityName} #${Math.floor(Math.random() * 1000000)}`,
    type: getRandomBoolean() ? `Apartment` : `Private room`,
    price: Math.floor(Math.random() * 200),
    rating: Math.floor(Math.random() * 100),
    image: `img/apartment-0${Math.floor(1 + Math.random() * 3)}.jpg`,
    link: `#`,
    bookmarked: getRandomBoolean(),
    location: [getRandomCoordinate(cityLocation[0]), getRandomCoordinate(cityLocation[1])],
  };
  if (getRandomBoolean()) {
    mockOffer.mark = `Premium`;
  }
  return mockOffer;
};

const offers = [];


for (const city of cities) {
  const {name, location} = city;
  const offersCount = Math.floor(Math.random() * 10);
  let i = 0;
  while (i < offersCount) {
    offers.push(createMockOffer(name, location));
    i++;
  }
}

export {offers};
