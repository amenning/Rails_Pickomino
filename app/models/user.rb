class User < ActiveRecord::Base
  validates :username, :presence => true, :uniqueness => true
  has_many :games
  
  
  #def password=(password)
  #  self.password = BCrypt::Password.create(password)
  #end
  
  #def is_password?(password)
  #  BCrypt::Password.new(self.password) == password
  #end
end
