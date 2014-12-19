json.array!(@snowdata) do |snowdatum|
  json.extract! @snowdatum, :location
  json.url snowdatum_url(snowdatum, format: :json)
end
