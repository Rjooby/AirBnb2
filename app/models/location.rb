class Location < ActiveRecord::Base
  validates :name, :camptype, :price, :description, :coordinates, presence: true
  validates :max_occupancy, presence: true

  has_many :requests,
    class_name: "Request",
    foreign_key: :location_id,
    primary_key: :id

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
    

end