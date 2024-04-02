class PostVotesPolicy < ApplicationPolicy
  class Scope < Scope

    def resolve
      if user.admin? || user.super_user?
        scope.all
      end
    end
  end
end
