class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.integer :user_id
      t.integer :newsletter_id
      t.string :headline
      t.string :text
      t.string :image
      t.string :url
      t.string :source
      t.integer :length
      t.date :send_date
      t.string :priority
      t.boolean :completed

      t.timestamps
    end
  end
end
