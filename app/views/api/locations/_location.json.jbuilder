json.extract! location, :id, :name, :coordinates, :latitude, :longitude, :description, :price
json.photo_url asset_path(location.photo.url(:thumb))
json.photo_url2 asset_path(location.photo.url(:head))
json._type "Location"
