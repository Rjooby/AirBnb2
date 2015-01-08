class Request < ActiveRecord::Base
  STATUS_STATES = %w(APPROVED DENIED PENDING)

  validates :guests_num, :status, :start_date, :end_date, presence: true
  belongs_to :user,
    class_name: "User",
    foreign_key: :requester_id,
    primary_key: :id

  belongs_to :location,
    class_name: "Location",
    foreign_key: :location_id,
    primary_key: :id
end
