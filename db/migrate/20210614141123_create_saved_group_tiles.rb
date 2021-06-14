class CreateSavedGroupTiles < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_group_tiles do |t|
      t.integer :tile_id
      t.integer :tile_position
      t.text :text
      t.references :saved_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
