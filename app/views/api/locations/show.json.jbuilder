json.extract! @location, :id, :name, :camptype, :owner_id, :price, :description, :coordinates, :max_occupancy, :water, :bathroom, :created_at, :updated_at

json.current current_user

json.requests @location.requests do |request|
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
  json.body review.body
  json.reviewer_id review.reviewer_id
  json.location_id review.location_id
  json.created_at review.created_at
  json.updated_at review.updated_at
end
