class Answer < ApplicationRecord
  belongs_to :post, foreign_key: :post_id
  belongs_to :user, foreign_key: :user_id
  has_many :ans_votes

  def as_custom_json
    {
      id: id,
      description: desc,
      author: user.username,
      post_id: post.id,
      votes: {
        totalVotes: ans_votes.sum(:value),
        users: ans_votes.map {
          |vote|
          {
            vote.user.username => vote.value
          }
        }.reduce(&:merge) || {},
      }
    }

  end
end
