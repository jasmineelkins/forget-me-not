class CreateNewsletters < ActiveRecord::Migration[7.0]
  def change
    create_table :newsletters do |t|
      t.string :title
      t.date :publish_date
      t.string :frequency
      t.integer :user_id
      t.boolean :sent

      t.timestamps
    end
  end
end
