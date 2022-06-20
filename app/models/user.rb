class User < ApplicationRecord
  has_secure_password

  has_many :articles, dependent: :destroy
  has_many :newsletters, dependent: :destroy

  validates :username, :name, presence: true
  validates :username, uniqueness: true

  def created_at
    attributes['created_at'].strftime('%B %d, %Y')
  end
end
