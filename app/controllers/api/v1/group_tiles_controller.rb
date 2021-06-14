class Api::V1::GroupTilesController < ApplicationController
  def index
    @group_tiles = GroupTile.where(group_id: params[:group_id])
    render json: @group_tiles
  end

  def show
  end

  def create
  end
end
