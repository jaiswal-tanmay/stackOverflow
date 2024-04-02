class AnsVotesPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    !user.nil? && record.answer.user_id != user.id
  end

  def destroy?
    create?
  end
end
