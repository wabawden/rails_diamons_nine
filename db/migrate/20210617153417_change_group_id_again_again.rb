class ChangeGroupIdAgainAgain < ActiveRecord::Migration[6.1]
  def change
      reversible do |dir|
        change_table :groups do |t|
          dir.up   { t.change :id_user, :integer }
          dir.down { t.change :id_user, :string }
        end
      end
  end
end
