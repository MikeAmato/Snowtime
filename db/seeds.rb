# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

    snowdata = Snowdatum.create([{
                  location: 'Jackson Hole, Wyoming',
                  snowfall: [3.0, 4.0, 2.0, 1.5, 0.0, 0.0, 0.5]
              }, 
              {
                  location: 'Aspen, Colorado',
                  snowfall: [4.0, 3.5, 0.6, 0.4, 3.0, 0.0, 0.0]
              }, 
              {
                  location: 'Snowbird, Utah',
                  snowfall: [0.8, 0.1, 0.0, 0.3, 3.0, 0.0, 0.0]
              }, 
              {
                  location: 'Alta, Utah',
                  snowfall: [0.9, 0.2, 0.0, 0.3, 3.0, 0.0, 4.0]
              }, 
              {
                  location: 'Vail, Colorado',
                  snowfall: [5.0, 4.5, 3.0, 2.5, 3.0, 0.0, 0.0]
              }])

             