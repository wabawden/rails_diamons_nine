class Api::V1::SavedGroupsController < ApplicationController
  def index
    @saved_groups = SavedGroup.where(group_id: params[:group_id])
    render json: @saved_groups
  end

  def show
  end

  def create
  end
end
