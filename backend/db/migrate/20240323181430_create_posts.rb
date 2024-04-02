class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.text :outcome
      t.references :user, null: false, foreign_key: true #user_id
      t.string :tags
      t.integer :views, default: 0

      t.timestamps
    end
  end
end
