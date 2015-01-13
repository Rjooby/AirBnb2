class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :camptype, null: false
      t.integer :owner_id, null: false
      t.integer :price, null: false
      t.float :latitude
      t.float :longitude
      t.text :description, null: false
      t.string :coordinates, null: false
      t.integer :max_occupancy, null: false
      t.boolean :water
      t.boolean :bathroom

      t.timestamps
    end
    add_index :locations, :owner_id
  end
end
