class Review < ActiveRecord::Base

  belongs_to :reviewer,
    class_name: "User",
    foreign_key: :reviewer_id,
    primary_key: :id

  belongs_to :location,
    class_name: "Location",
    foreign_key: :location_id,
    primary_key: :id

end
