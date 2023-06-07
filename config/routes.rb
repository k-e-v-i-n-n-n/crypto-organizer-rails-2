Rails.application.routes.draw do

  scope :api do

    post "/signup", to: "users#create"

    post "/login", to: "sessions#create"

    delete "/logout", to: "sessions#destroy"

    get "/me", to: "users#index"

    resources :currencies
    resources :users

  end


  
 
end
