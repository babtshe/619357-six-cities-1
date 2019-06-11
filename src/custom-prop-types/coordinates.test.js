import {coordinates} from './coordinates.prop';

const propName = `location`;
const componentName = `component`;

it(`Should fail if no array of coordinates provided`, ()=>{
  const mockProps = {
    location: ``,
  };
  const testCoordinates = jest.fn(coordinates);
  testCoordinates(mockProps, propName, componentName);
  expect(testCoordinates).toHaveReturnedWith(new Error(`Invalid prop type: \`location\` of class \`String\` supplied to \`component\`, expected \`Array\``));
});

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

it(`Should fail if no required prop provided`, ()=>{
  const mockProps = {
  };
  const testCoordinates = jest.fn(coordinates.isRequired);
  testCoordinates(mockProps, propName, componentName);
  expect(testCoordinates).toHaveReturnedWith(new Error(`Failed prop type: The prop \`location\` is marked as required in \`component\`, but its value is \`undefined\``));
});

it(`Should return null if coordinates are correct`, ()=>{
  const mockProps = {
    location: [10.2, 10.1],
  };
  const testCoordinates = jest.fn(coordinates);
  testCoordinates(mockProps, propName, componentName);
  expect(testCoordinates).toHaveReturnedWith(null);
});
