class Location < ActiveRecord::Base
  include PgSearch

  validates :name, :camptype, :price, :description, :coordinates, presence: true
  validates :max_occupancy, presence: true
  geocoded_by :coordinates
  has_attached_file :photo, default_url: "earth.jpg"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  after_validation :check_geocode

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


  def close_by?
    Location.near(self.coordinates, 100).include?(coordinates)
  end

  def check_geocode
    unless self.latitude
      geocode
    end
  end

  def photo_url=(photo_url)
    unless self.photo.exists?
      self.photo = photo_url
    end
  end


end
