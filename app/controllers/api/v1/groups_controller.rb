class Api::V1::GroupsController < ActionController::Base
    def index
        @groups = Group.all
        render json: @groups
    end

    def show
        @group = Group.find(params[:id])
        render json: @group
    end

    def create
    end
end
