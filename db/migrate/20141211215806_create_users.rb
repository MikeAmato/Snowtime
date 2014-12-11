class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :password_confirmation
      t.string :remember_token

      t.timestamps null: false
    end
  end
end
