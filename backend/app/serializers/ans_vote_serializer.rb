class AnsVoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :answer_id, :value # , :created_at, :updated_at

  belongs_to :user
  belongs_to :answer
end
