class Snowdatum < ActiveRecord::Base
  belongs_to :user

  include HTTParty 


    #to call the first api to get the snow fall data
  #@response = HTTParty.get('http://www.ncdc.noaa.gov/cdo-web/api/v2/{endpoint}')


    #to call the second api to get the snow depth data
  # @response2 = HTTParty.get('https://api.weathersource.com/v1/0d0035b08d9f3987a068/
  #   history_by_postal_code.json?period=day&postal_code_eq=80424&country_eq=US&
  #   timestamp_eq=2010-12-19T00:00:00&
  #   fields=postal_code,country,timestamp,precip,snowfall')
end
