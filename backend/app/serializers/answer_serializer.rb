class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :desc, :post_id, :user_id #, :created_at, :updated_at

  belongs_to :post
  belongs_to :user
  has_many :ans_votes
end
