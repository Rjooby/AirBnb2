class Location < ActiveRecord::Base
  validates: :type, :price, :description, :coordinates, presence: true
  validates: :max_occupancy, :water, :bathroom, presence: true

  has_many :requests,
    class_name: "Request",
    foreign_key: "location_id",
    primary_key: "id"

  belongs_to :owner,
    class_name: "User",
    foreign_key: "owner_id",
    primary_key: "id"

end
