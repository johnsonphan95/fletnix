class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
        if @user 
            login(@user)
            render 'api/users/show'
        else 
            render json: { email: ["Please enter a valid email"], 
                           password: ["Password must contain between 6 and 60 characters"] }, status: 401
        end 
    end


    def destroy
        @user = current_user
        if logged_in?
            logout
            render json: {}
        else 
            render json: ["Nobody signed in"], status: 404
        end
    end
end
