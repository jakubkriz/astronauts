class CreateAstronauts < ActiveRecord::Migration[5.1]
  def change
    create_table :astronauts do |t|
      t.string :firstname
      t.string :lastname
      t.date :birthdate
      t.string :superpower

      t.timestamps
    end
  end
end
