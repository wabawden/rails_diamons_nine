# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
group = Group.create(question:"What is the most important issue facing the country?", highlabel:"most important", lowlabel:"least important", id_user:1111111)

tile1 = GroupTile.create(tile_id:1, tile_position:1, text:"one")
tile1.group = group
tile1.save!

tile2 = GroupTile.create(tile_id:2, tile_position:2, text:"two")
tile2.group = group
tile2.save!

tile3 = GroupTile.create(tile_id:3, tile_position:3, text:"three")
tile3.group = group
tile3.save!
tile4 = GroupTile.create(tile_id:4, tile_position:4, text:"four")
tile4.group = group
tile4.save!
tile5 = GroupTile.create(tile_id:5, tile_position:5, text:"five")
tile5.group = group
tile5.save!
tile6 = GroupTile.create(tile_id:6, tile_position:6, text:"six")
tile6.group = group
tile6.save!
tile7 = GroupTile.create(tile_id:7, tile_position:7, text:"seven")
tile7.group = group
tile7.save!
tile8 = GroupTile.create(tile_id:8, tile_position:8, text:"eight")
tile8.group = group
tile8.save!
tile9 = GroupTile.create(tile_id:9, tile_position:9, text:"nine")
tile9.group = group
tile9.save!