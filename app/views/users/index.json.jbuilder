json.array!(@users) do |user|
  json.extract! user, :id, :name, :email, :password_digest, :password_confirmation, :remember_token
  json.url user_url(user, format: :json)
end
