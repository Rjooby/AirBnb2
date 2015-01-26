json.results @search_results do |loc|

  json.partial! "api/locations/location", location: loc

end
