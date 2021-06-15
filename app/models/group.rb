class Group < ApplicationRecord
    has_many:group_tiles
    has_many:saved_groups
end
