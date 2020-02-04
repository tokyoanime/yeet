@res.each do |el|
  json.set! el.id do
    json.partial! 'biz', biz: el
  end
end