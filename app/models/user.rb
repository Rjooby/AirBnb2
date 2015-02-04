class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  has_attached_file :avatar, default_url: "cubone.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :booking_requests,
    dependent: :destroy,
    class_name: "Request",
    foreign_key: :requester_id,
    primary_key: :id

  has_many :locations,
    dependent: :destroy,
    class_name: "Location",
    foreign_key: :owner_id,
    primary_key: :id

  has_many :posted_reviews,
    dependent: :destroy,
    class_name: "Review",
    foreign_key: :reviewer_id,
    primary_key: :id

  has_many :rental_requests,
    dependent: :destroy,
    through: :locations,
    source: :requests

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def avatar_url=(avatar_url)
    unless self.avatar.exists?
      self.avatar = avatar_url
    end
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end


end
