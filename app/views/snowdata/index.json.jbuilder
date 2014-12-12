json.array!(@snowdata) do |snowdatum|
  json.extract! snowdatum, :id, :snowfall, :snowdepth, :location, :zipcode, :date
  json.url snowdatum_url(snowdatum, format: :json)
end
