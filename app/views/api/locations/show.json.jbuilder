json.extract! @location, :id, :latitude, :longitude, :name, :camptype, :owner_id, :price, :description, :coordinates, :max_occupancy, :water, :bathroom, :created_at, :updated_at
json.photo_url asset_path(@location.photo.url)

json.current current_user

json.owner_avatar asset_path(@location.owner.avatar.url)

json.requests @location.requests do |request|
  json.id request.id
  json.location_id request.location_id
  json.requester_id request.requester_id
  json.guests_num request.guests_num
  json.status request.status
  json.start_date request.start_date
  json.end_date request.end_date
  json.created_at request.created_at
  json.updated_at request.updated_at
end

json.reviews @location.reviews do |review|
  json.id review.id
  json.body review.body
  json.reviewer review.reviewer.username
  json.reviewer_avatar asset_path(review.reviewer.avatar.url)
  json.reviewer_id review.reviewer_id
  json.location_id review.location_id
  json.created_at time_ago_in_words(review.created_at)
  json.updated_at review.updated_at
end
