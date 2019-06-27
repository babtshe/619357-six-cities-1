const getRatingPercent = (value) => Math.max(0, Math.min(Math.floor(value + 0.5), 5)) * 20;
const adaptDateString = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString(`en-us`, {month: `long`});
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const offersAdapter = (data = []) => {
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
      rating: getRatingPercent(item.rating),
    });
  }
  return result;
};

export const reviewsAdapter = (data = []) => {
  const result = [];

  for (const item of data) {
    result.push({
      comment: item.comment,
      date: item.date,
      dateString: adaptDateString(item.date),
      id: item.id,
      rating: getRatingPercent(item.rating),
      user: {
        id: item.user.id,
        name: item.user.name,
        avatar: item.user[`avatar_url`],
        pro: item.user[`is_pro`],
      }
    });
  }
  return result;
};
