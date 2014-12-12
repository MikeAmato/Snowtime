class CreateSnowdata < ActiveRecord::Migration
  def change
    create_table :snowdata do |t|
      t.integer :snowfall
      t.integer :snowdepth
      t.string :location
      t.integer :zipcode
      t.datetime :date

      t.timestamps null: false
    end
  end
end
