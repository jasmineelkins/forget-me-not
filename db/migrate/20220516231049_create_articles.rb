class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.integer :user_id
      t.integer :newsletter_id
      t.string :title
      t.string :text
      t.string :image

      t.timestamps
    end
  end
end
