class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :role #, :password_digest, :password #, :created_at, :updated_at
end
