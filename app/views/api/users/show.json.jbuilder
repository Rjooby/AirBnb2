json.extract! @user, :id, :username, :created_at, :updated_at

json.current current_user

json.locations @user.locations do |location|
  json.owner_id location.owner_id
  json.id location.id
  json.name location.name
end
