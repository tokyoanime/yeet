export const fetchReviews = (bizId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${bizId}/reviews`
  })
)

export const createReview = (review) => (
  $.ajax({
    url: '/api/reviews',
    method: 'POST',
    data: { review }
  })
)

export const getReview = (id) => (
  $.ajax({
    url: `/api/reviews/${id}`,
    method: 'GET'
  })
)

export const updateReview = (review) => (
  $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
)

export const deleteReview = (id) => (
  $.ajax({
    url: `/api/reviews/${id}`,
    method: 'DELETE',
  })
)