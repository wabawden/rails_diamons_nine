class SavedGroup < ApplicationRecord
  belongs_to :group
  has_many :saved_group_tiles
  has_many :saved_group_notes
end
