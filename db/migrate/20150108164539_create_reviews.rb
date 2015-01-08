class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :reviewer_id, null: false
      t.integer :location_id, null: false
      t.timestamps
    end

    add_index :reviews, :reviewer_id
    add_index :reviews, :location_id
  end
end
