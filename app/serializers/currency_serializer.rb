class CurrencySerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :price, :rank, :day_change, :user_id
  belongs_to :user
end
