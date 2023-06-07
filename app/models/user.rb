class User < ApplicationRecord
    has_secure_password
    has_many :currencies
    validates :username, uniqueness: true, presence: true
end
