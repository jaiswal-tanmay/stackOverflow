class AnsVote < ApplicationRecord
  belongs_to :user
  belongs_to :post
  belongs_to :answer

  def as_custom_json
    {
      id: id,
      post_id: post.id,
      username: user.username,
      value: value
    }
  end

end
