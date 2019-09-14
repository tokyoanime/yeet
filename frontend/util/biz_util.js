export const createBiz = (biz) => (
  $.ajax({
    url: '/api/businesses',
    method: 'POST',
    data: {biz}
  })
);

export const getBiz = (id) => (
  $.ajax({
    url: `/api/businesses/${id}`,
    method: 'GET'
  })
);

export const updateBiz = (biz) => (
  $.ajax({
    url: `/api/businesses/${biz.id}`,
    method: 'PATCH',
    data: {biz}
  })
);+