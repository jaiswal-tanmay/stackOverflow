class User < ApplicationRecord
  enum role: { user: "user", super_user: "super_user", admin: "admin" }

  def admin?
    role == "admin"
  end

  def super_user?
    role == "super_user"
  end

  def password_required_on_update?
    new_record? || password.present?
  end

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, if: :password_required_on_update?
  has_secure_password

  has_many :posts, foreign_key: :user_id
  has_many :answers, foreign_key: :user_id
  has_many :post_votes
  has_many :ans_votes
end
