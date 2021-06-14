class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :question
      t.string :highlabel
      t.string :lowlabel
      t.integer :id_user

      t.timestamps
    end
  end
end
