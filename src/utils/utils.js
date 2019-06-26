export const stringifyQuery = (query) => {
  if (!query) {
    return null;
  }
  const paramString = Object.keys(query).reduce((acc, key) => {
    acc.push(`${key}=${encodeURIComponent(query[key])}`);
    return acc;
  }, [])
  .join(`&`);
  return `?${paramString}`;
};

export const parseQueryString = (string) => {
  if (!string) {
    return {};
  }
  const params = new URLSearchParams(string);
  const result = {};
  for (const key of params.entries()) {
    result[key[0]] = key[1];
  }
  return result;
};
