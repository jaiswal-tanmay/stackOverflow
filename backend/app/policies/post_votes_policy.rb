class PostVotesPolicy < ApplicationPolicy
    class Scope < Scope
      def resolve
        scope.all
      end
    end

    def create?
      !user.nil? && record.post.user_id != user.id
    end

    def destroy?
      create?
    end
end
