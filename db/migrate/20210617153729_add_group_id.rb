class AddGroupId < ActiveRecord::Migration[6.1]
  def change
    change_table :groups do |t|
      t.string :id_user
    end
  end
end
