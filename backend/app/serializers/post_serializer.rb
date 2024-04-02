class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :outcome, :tags, :views #, :created_at, :updated_at

  has_many :post_votes
  has_many :answers
  has_many :ans_votes, through: :answers
  belongs_to :user
end
