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
        @group = Group.create(group_params)
        render json: @group
    end

    private
    
    def group_params
      params.require(:group).permit(:question, :highlabel, :lowlabel, :id_user)
    end 
end
