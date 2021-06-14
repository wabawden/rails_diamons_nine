class CreateGroupTiles < ActiveRecord::Migration[6.1]
  def change
    create_table :group_tiles do |t|
      t.integer :tile_id
      t.integer :tile_position
      t.text :text
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
