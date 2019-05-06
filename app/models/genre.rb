class Genre < ApplicationRecord
    validates :genre, presence: true

    has_many :movie_genres, 
        primary_key: :id, 
        foreign_key: :genre_id, 
        class_name: :MovieGenre

    has_many :movies, 
        through: :movie_genres, 
        source: :movie
end
