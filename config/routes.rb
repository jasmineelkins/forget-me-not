Rails.application.routes.draw do
  resources :newsletters do
    resources :articles
  end

  resources :articles

  resources :users do
    resources :articles
    resources :newsletters
  end

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/send_test', to: 'users#send_test_email'
  get '/send_current_newsletter/:frequency',
      to: 'newsletters#send_current_newsletter'
end
