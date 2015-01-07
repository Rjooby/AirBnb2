class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :type, null: false
      t.integer :owner_id, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.string :coordinates, null: false
      t.integer :max_occupancy, null: false
      t.boolean :water, null: false
      t.boolean :bathroom, null: false

      t.timestamps
    end
    add_index :locations, :owner_id
  end
end
