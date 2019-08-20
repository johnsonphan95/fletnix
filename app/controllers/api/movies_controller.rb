class Api::MoviesController < ApplicationController
    def index

        @movies = Movie.all
        render :index
    end 

    def show 
        @movie = Movie.find(params[:id])
        render :show
    end 

    def search 
       
        query = params[:query]
        @movies = Movie.where('title LIKE ? OR title LIKE ?' , "%#{query.capitalize}%", "%#{query.downcase}%")
        
        render :index
    end 
    
    def movie_params
        params.require(:movie).permit(:id)
    end 

end
