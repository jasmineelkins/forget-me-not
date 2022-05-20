class CreateNewsletters < ActiveRecord::Migration[7.0]
  def change
    create_table :newsletters do |t|
      t.date :publish_date
      t.string :title
      t.integer :user_id

      t.timestamps
    end
  end
end
