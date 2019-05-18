function coordinates(props, propName, componentName) {
  const prop = props[propName];
  if (typeof prop !== `undefined` && prop !== null) {
    if (!Array.isArray(prop)) {
      return new Error(`Invalid prop type: \`${propName}\` of class \`${prop.constructor.name}\` supplied to \`${componentName}\`, expected \`Array\``);
    }
    if (prop.length !== 2) {
      return new Error(`Invalid prop type: \`${propName}\` of length \`${prop.length}\` supplied to \`${componentName}\`, expected \`2\``);
    }
    const idx = prop.findIndex((value) => !Number.isFinite(value));
    if (idx !== -1) {
      return new Error(`Failed prop type: Invalid prop \`${propName}[${idx}]\` of value \`${prop[idx]}\` supplied to \`${componentName}\`, expected \`finite number\``);
    }
  }
  return null;
}

coordinates.isRequired = function (props, propName, componentName) {
  const prop = props[propName];
  if (typeof prop === `undefined` || prop === null) {
    return new Error(`Failed prop type: The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`${prop}\`.`);
  }

  return coordinates(props, propName, componentName);
};

export {coordinates};
