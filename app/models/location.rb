class Location < ActiveRecord::Base
  validates :name, :camptype, :price, :description, :coordinates, presence: true
  validates :max_occupancy, presence: true
  geocoded_by :coordinates
  after_validation :geocode, if: :coordinates_changed?

  has_many :requests,
    dependent: :destroy,
    class_name: "Request",
    foreign_key: :location_id,
    primary_key: :id

  has_many :reviews,
    dependent: :destroy,
    class_name: "Review",
    foreign_key: :location_id,
    primary_key: :id

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id


end
