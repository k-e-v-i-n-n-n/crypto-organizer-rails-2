class Currency < ApplicationRecord
    validates :name, presence: true
    belongs_to :user
end
