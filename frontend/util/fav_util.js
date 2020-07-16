export const createFav = (fav) =>
  $.ajax({
    url: '/api/favorites',
    method: 'POST',
    data: { fav },
  });

export const fetchFav = (businessId) =>
  $.ajax({
    url: `/api/favorites/${businessId}`,
    method: 'GET',
  });
