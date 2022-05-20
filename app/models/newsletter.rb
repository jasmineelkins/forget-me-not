class Newsletter < ApplicationRecord
  has_many :articles, dependent: :destroy
  belongs_to :user
end
