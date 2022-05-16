class CreateNewsletters < ActiveRecord::Migration[7.0]
  def change
    create_table :newsletters do |t|
      t.string :publish_date
      t.string :headline

      t.timestamps
    end
  end
end
