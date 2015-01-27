json.extract! location, :id, :name, :coordinates, :latitude, :longitude, :description
json.photo_url asset_path(location.photo.url)
json._type "Location"
