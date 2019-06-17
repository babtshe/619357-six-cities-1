const adapter = (data = []) => {
  const result = [];

  for (const item of data) {
    result.push(Object.assign({}, item, {
      city: {
        name: item.city.name,
        location: [item.city.location.latitude, item.city.location.longitude],
        zoom: item.city.location.zoom,
      },
      location: [item.location.latitude, item.location.longitude],
      image: item[`preview_image`],
      name: item.title,
      bookmarked: item[`is_favorite`],
      premium: item[`is_premium`],
      rating: Math.max(Math.floor(item.rating + 0.5), 5) * 20,
    }));
  }
  return result;
};

export default adapter;
