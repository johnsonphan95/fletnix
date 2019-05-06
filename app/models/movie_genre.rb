class MovieGenre < ApplicationRecord
    validates :movie_id, :genre_id, presence: true

    belongs_to :genre,
        primary_key: :id,
        foreign_key: :genre_id, 
        class_name: :Genre

    belongs_to :movie, 
        foreign_key: :movie_id,
        class_name: :Movie
end
