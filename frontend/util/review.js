export const createReview = (review) => (
  $.ajax({
    url: '/api/reviews',
    method: 'POST',
    data: { review }
  })
)