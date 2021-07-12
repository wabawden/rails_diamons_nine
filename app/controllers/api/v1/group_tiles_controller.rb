class Api::V1::GroupTilesController < ApplicationController
  def index
    @group_tiles = GroupTile.where(group_id: params[:group_id])
    render json: @group_tiles
  end

  def show
    @group_tile = GroupTile.find(params[:id])
    render json: @group_tile
  end

  def create
    @group_tile = GroupTile.create(group_params)
    render json: @group_tile
  end

  private
    
  def group_params
    params.require(:group_tile).permit(:tile_id, :tile_position, :text)
  end 
end
