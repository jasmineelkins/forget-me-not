class User < ApplicationRecord
  has_many :articles, dependent: :destroy
  has_many :newsletters, dependent: :destroy

  has_secure_password

  validates :username, :name, presence: true
  validates :username, uniqueness: true

  def created_at
    attributes['created_at'].strftime('%B %d, %Y')
  end
end
