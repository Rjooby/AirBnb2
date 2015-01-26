json.results @search_results.map(&:searchable) do |loc|

  json.partial! "api/locations/location", location: loc

end
