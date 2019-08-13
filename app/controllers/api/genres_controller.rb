class Api::GenresController < ApplicationController
    def index 
        @genres = Genre.all 
        render :index
    end 

    def search 
        query = params[:query]
        @genres = Genre.where('genre LIKE ? OR genre LIKE ?' , "%#{query.capitalize}%", "%#{query.downcase}%")
        render :index
    end 

    def show 
        @genre = Genre.find(params[:id])
        render :show
    end 

    
end
