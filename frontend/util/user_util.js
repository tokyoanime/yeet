export const createUser = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user}
  })
);

export const getUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  })
);

export const updateUser = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: {user}
  })
);
