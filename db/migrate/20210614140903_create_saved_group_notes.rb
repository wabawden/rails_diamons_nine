class CreateSavedGroupNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_group_notes do |t|
      t.integer :note_id
      t.string :type
      t.text :text
      t.references :saved_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
