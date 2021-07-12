class ChangeGroupIdAgainAgainAgain < ActiveRecord::Migration[6.1]
  def change
    change_table :groups do |t|
      t.remove :id_user
    end
  end
end
