Rails.application.routes.draw do
  resources :newsletters
  resources :articles

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

  get '/send_test', to: 'users#send_test_email'
  get '/send_current_newsletter/:frequency',
      to: 'newsletters#send_current_newsletter'

  # serve the client’s index.html for any path that is not included in your client’s routes:
  get '*path',
      to: 'application#fallback_index_html',
      constraints: ->(request) { !request.xhr? && request.format.html? }

  # match "*all" => "application#cors_preflight_check", :constraints => { :method => "OPTIONS" }
  # match "/alert" => "alerts#create"
  # match "/alerts" => "alerts#get"
  # match "/login" => "sessions#create"
  # match "/logout" => "sessions#destroy"
  # match "/register" => "users#create"
end
