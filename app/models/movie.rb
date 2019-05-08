class Movie < ApplicationRecord
    validates :title, :year, :description, :rating, :run_time, presence: true 

    has_one_attached :photo
    has_one_attached :video

    has_many :movie_genres, 
        primary_key: :id, 
        foreign_key: :movie_id, 
        class_name: :MovieGenre

    has_many :genres, 
        through: :movie_genres, 
        source: :genre
end
