class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    user.admin? || user.super_user?
  end

  def update?
    user.admin? && !user.changed.include?("password")
  end

  def destroy?
    user.admin? || user.super_user? || record == user
  end

  def change_role?
    user.admin? || user.super_user?
  end
end
