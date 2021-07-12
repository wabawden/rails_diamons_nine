class ChangeGroupId < ActiveRecord::Migration[6.1]
  def change
    def change
      reversible do |dir|
        change_table :groups do |t|
          dir.up   { t.change :id_user, :string }
          dir.down { t.change :id_user, :integer }
        end
      end
    end
  end
end
