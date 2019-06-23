const adapter = (data = []) => {
  const result = [];

  for (const item of data) {
    result.push({
      bedrooms: item.bedrooms,
      description: item.description,
      goods: item.goods,
      host: {
        avatar: item.host[`avatar_url`],
        id: item.host.id,
        name: item.host.name,
        pro: item.host[`is_pro`],
      },
      id: item.id,
      images: item.images.slice(0, 6),
      maxGuests: item[`max_adults`],
      price: item.price,
      city: {
        name: item.city.name,
        location: [item.city.location.latitude, item.city.location.longitude],
        zoom: item.city.location.zoom,
      },
      type: item.type,
      location: [item.location.latitude, item.location.longitude],
      image: item[`preview_image`],
      name: item.title,
      bookmarked: item[`is_favorite`],
      premium: item[`is_premium`],
      rating: Math.max(Math.floor(item.rating + 0.5), 5) * 20,
    });
  }
  return result;
};

export default adapter;
