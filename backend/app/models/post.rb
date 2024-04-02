class Post < ApplicationRecord
  belongs_to :user
  has_many :answers
  has_many :post_votes
  has_many :ans_votes, through: :answers

  def as_custom_json
    {
      id: id,
      title: title,
      description: description,
      outcome: outcome,
      votes: {
        users: post_votes.map { |vote| { vote.user.username => vote.value } }.reduce(&:merge) || {},
        totalVotes: post_votes.sum(:value)
      },
      answers: answers.map do |answer|
        {
          ans_id: answer.id,
          description: answer.desc,
          author: answer.user.username,
          votes: {
            users: answer.ans_votes.map { |vote| { vote.user.username => vote.value } }.reduce(&:merge) || {},
            totalVotes: answer.ans_votes.sum(:value)
          }
        }
      end,
      views: views,
      tags: tags.split(' ').map(&:strip),
      author: user.username,
      author_id: user.id
    }
  end
end

# tags: tags.split(',').map(&:strip), # Assuming tags are stored as comma-separated values
