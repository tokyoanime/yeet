@reviews.each do |el|
  json.set! el.id do
    json.partial! 'review', review: el
  end
end