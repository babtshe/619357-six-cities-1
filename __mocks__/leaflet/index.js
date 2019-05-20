export default {
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn(),
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn(),
  }),
};
