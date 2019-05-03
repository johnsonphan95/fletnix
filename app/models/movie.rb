class Movie < ApplicationRecord
    validates :title, :year, :description, :rating, :run_time, presence: true 

    has_one_attached :photo
end
