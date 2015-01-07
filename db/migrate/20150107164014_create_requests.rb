class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :location_id, null: false
      t.integer :requester_id, null: false
      t.integer :guests_num, null: false
      t.string :status, null: false, default: "pending"
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end
    add_index :requests, :location_id
    add_index :requests, :requester_id
  end
end
