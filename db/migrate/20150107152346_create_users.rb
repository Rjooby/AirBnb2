class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :first_name
      t.string :last_name
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
  end
end
