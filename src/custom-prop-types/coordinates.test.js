import {coordinates} from './coordinates.prop';

const propName = `location`;
const componentName = `component`;
it(`Should fail if wrong number of coordinates provided`, ()=>{
  const mockProps = {
    location: [],
  };
  const testCoordinates = jest.fn(coordinates);
  testCoordinates(mockProps, propName, componentName);
  expect(testCoordinates).toHaveReturnedWith(new Error(`Invalid prop type: \`location\` of length \`0\` supplied to \`component\`, expected \`2\``));
});

it(`Should fail if wrong value provided`, ()=>{
  const mockProps = {
    location: [`wrong`, `value`],
  };
  const testCoordinates = jest.fn(coordinates);
  testCoordinates(mockProps, propName, componentName);
  expect(testCoordinates).toHaveReturnedWith(new Error(`Failed prop type: Invalid prop \`location[0]\` of value \`wrong\` supplied to \`component\`, expected \`finite number\``));
});

it(`Should return null if coordinates are correct`, ()=>{
  const mockProps = {
    location: [10.2, 10.1],
  };
  const testCoordinates = jest.fn(coordinates);
  testCoordinates(mockProps, propName, componentName);
  expect(testCoordinates).toHaveReturnedWith(null);
});
