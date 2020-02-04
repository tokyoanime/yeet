export const search = query =>
  $.ajax({
    url: `/api/search/${query}`,
    method: 'GET'
  });
