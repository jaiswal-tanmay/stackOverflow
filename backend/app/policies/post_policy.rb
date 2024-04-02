class PostPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    true
  end

  def create?
    user.present?
  end

  def update?
    user.present? && (record.user == user || user.admin? || user.super_user?)
  end

  def destroy?
    user.present? && (record.user == user || user.admin? || user.super_user?)
  end
end
