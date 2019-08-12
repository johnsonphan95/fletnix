Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show] do 
      get :search, on: :collection
    end 
    resources :genres, only: [:index, :show] do 
      get :search, on: :collection
    end 
    resources :tags, only: [:index, :show]
  end

end
