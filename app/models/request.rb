class Request < ActiveRecord::Base
  STATUS_STATES = %w(APPROVED DENIED PENDING)

  validates :guests_num, :status, :start_date, :end_date, presence: true
  validates :status, inclusion: STATUS_STATES

  belongs_to :user,
    class_name: "User",
    foreign_key: :requester_id,
    primary_key: :id

  belongs_to :location,
    class_name: "Location",
    foreign_key: :location_id,
    primary_key: :id

  def approve!
    raise "not pending" unless self.status == "PENDING"
    transaction do
      self.status = "APPROVED"
      self.save!
      overlapping_pending_requests.update_all(status: 'DENIED')
    end
  end

  def deny!
    self.status = "DENIED"
    self.save!
  end

  def pending?
    self.status == "PENDING"
  end

  def overlapping_requests
    Request
      .where("(:id IS NULL) OR (id != :id)", id: self.id)
      .where(cat_id: cat_id)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
      NOT( (start_date > :end_date) OR (end_date < :start_date) )
SQL
  end

  def overlapping_pending_requests
    overlapping_request.where("status = 'PENDING'")
  end

end
