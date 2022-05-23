Rails.application.routes.draw do
  resources :newsletters
  resources :articles do
    match '/scrape', to: 'articles#scrape', via: :post, on: :collection
  end

  resources :users, only: %i[index create show update] do
    resources :articles, only: %i[index show create update delete]
    resources :newsletters, only: %i[index show create update delete]
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # match "*all" => "application#cors_preflight_check", :constraints => { :method => "OPTIONS" }
  # match "/alert" => "alerts#create"
  # match "/alerts" => "alerts#get"
  # match "/login" => "sessions#create"
  # match "/logout" => "sessions#destroy"
  # match "/register" => "users#create"
end
