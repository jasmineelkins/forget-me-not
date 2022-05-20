class Article < ApplicationRecord
  belongs_to :user
  belongs_to :newsletter

  def created_at
    attributes['created_at'].strftime('%m/%d/%y')
  end
end
