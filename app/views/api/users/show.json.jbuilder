json.extract! @user, :id, :username, :created_at, :updated_at

json.current current_user

json.locations @user.locations do |location|
  json.owner_id location.owner_id
  json.id location.id
  json.name location.name
end

json.booking_requests @user.booking_requests do |request|
  json.location_id request.location_id
  json.start_date request.start_date
  json.end_date request.end_date
  json.status request.status
end
