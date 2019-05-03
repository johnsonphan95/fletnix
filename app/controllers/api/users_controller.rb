class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render :show
        else 
            render "api/errors/user_errors", status: 422
        end 
    end 

    def user_params 
        params.require(:user).permit(:email, :password)
    end 
end