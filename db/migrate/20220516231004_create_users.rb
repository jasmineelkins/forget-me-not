class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :about
      t.string :location
      t.date :birthday
      t.string :email
      t.boolean :receive_newsletter

      t.timestamps
    end
  end
end
