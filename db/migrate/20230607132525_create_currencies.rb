class CreateCurrencies < ActiveRecord::Migration[7.0]
  def change
    create_table :currencies do |t|
      t.string :category
      t.string :name
      t.integer :price
      t.integer :rank
      t.string :day_change
      t.integer :user_id

      t.timestamps
    end
  end
end
