class Api::TagsController < ApplicationController
    def index 
        @tags = MovieGenre.all
        render :index
    end 

    def show 
        @tag = MovieGenre.find(params[:id])
        render :show
    end 
end
