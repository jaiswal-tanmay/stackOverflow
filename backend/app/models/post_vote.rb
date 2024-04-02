class PostVote < ApplicationRecord
  belongs_to :user
  belongs_to :post

  def as_custom_json
    {
      id: id,
      post_id: post.id,
      value: value,
      username: user.username,
    }
  end
end
