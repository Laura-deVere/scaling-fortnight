class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :location
      t.float :latitude
      t.float :longitude
      t.boolean :visited

      t.timestamps null: false
    end
  end
end
